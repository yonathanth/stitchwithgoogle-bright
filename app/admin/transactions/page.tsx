'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  transactionsApi,
  Transaction,
  TransactionStats,
  PaginatedResponse,
} from '@/lib/api';
import DataTable, { Pagination, type Column } from '@/components/admin/DataTable';
import StatsCard from '@/components/admin/StatsCard';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<PaginatedResponse<Transaction> | null>(null);
  const [stats, setStats] = useState<TransactionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const limit = 10;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const fetchTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await transactionsApi.getAll({
        page,
        limit,
        type: (typeFilter as 'income' | 'expense') || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      });
      setTransactions(data);
    } catch (err) {
      console.error('Failed to fetch transactions:', err);
    } finally {
      setIsLoading(false);
    }
  }, [page, typeFilter, startDate, endDate]);

  const fetchStats = useCallback(async () => {
    try {
      const data = await transactionsApi.getStats();
      setStats(data);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const columns: Column<Transaction>[] = [
    {
      key: 'type',
      header: 'Type',
      render: (transaction: Transaction) => (
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
            transaction.type === 'income'
              ? 'bg-emerald-500/10 text-emerald-400'
              : 'bg-red-500/10 text-red-400'
          }`}
        >
          <span className="material-symbols-outlined text-sm">
            {transaction.type === 'income' ? 'arrow_downward' : 'arrow_upward'}
          </span>
          {transaction.type}
        </div>
      ),
    },
    {
      key: 'description',
      header: 'Description',
      render: (transaction: Transaction) => (
        <div>
          <p className="text-white font-medium">
            {transaction.description || transaction.category}
          </p>
          {transaction.member && (
            <p className="text-white/40 text-xs">{transaction.member.fullName}</p>
          )}
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      render: (transaction: Transaction) => (
        <span className="text-white/80 capitalize">{transaction.category}</span>
      ),
    },
    {
      key: 'date',
      header: 'Date',
      render: (transaction: Transaction) => (
        <span className="text-white/80">{formatDate(transaction.transactionDate)}</span>
      ),
    },
    {
      key: 'paymentMethod',
      header: 'Payment',
      render: (transaction: Transaction) => (
        <span className="text-white/60 capitalize">
          {transaction.paymentMethod || 'N/A'}
        </span>
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      className: 'text-right',
      render: (transaction: Transaction) => (
        <span
          className={`font-semibold ${
            transaction.type === 'income' ? 'text-emerald-400' : 'text-red-400'
          }`}
        >
          {transaction.type === 'income' ? '+' : '-'}
          {formatCurrency(transaction.amount)}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '',
      className: 'w-12 text-right',
      render: () => (
        <span className="material-symbols-outlined text-white/40">
          chevron_right
        </span>
      ),
    },
  ];

  const calculateChange = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchTransactions();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-white text-2xl font-bold">Transactions</h1>
          <p className="text-white/60 mt-1">Manage income and expenses</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Income"
          value={formatCurrency(stats?.totalIncome || 0)}
          icon="trending_up"
          color="green"
        />
        <StatsCard
          title="Total Expenses"
          value={formatCurrency(stats?.totalExpense || 0)}
          icon="trending_down"
          color="red"
        />
        <StatsCard
          title="Net Profit"
          value={formatCurrency(stats?.netProfit || 0)}
          icon="account_balance"
          color="primary"
        />
        <StatsCard
          title="This Month"
          value={formatCurrency(stats?.thisMonthIncome || 0)}
          icon="calendar_month"
          color="blue"
          trend={
            stats
              ? {
                  value: calculateChange(
                    stats.thisMonthIncome,
                    stats.lastMonthIncome
                  ),
                  isPositive:
                    stats.thisMonthIncome >= stats.lastMonthIncome,
                }
              : undefined
          }
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* This Month Overview */}
        <div className="bg-surface-dark rounded-xl border border-surface-dark-lighter p-6">
          <h2 className="text-white font-semibold mb-4">This Month</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <span className="material-symbols-outlined">arrow_downward</span>
                </div>
                <span className="text-white/80">Income</span>
              </div>
              <span className="text-emerald-400 font-semibold">
                {formatCurrency(stats?.thisMonthIncome || 0)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <span className="material-symbols-outlined">arrow_upward</span>
                </div>
                <span className="text-white/80">Expenses</span>
              </div>
              <span className="text-red-400 font-semibold">
                {formatCurrency(stats?.thisMonthExpense || 0)}
              </span>
            </div>
            <div className="border-t border-surface-dark-lighter pt-4 flex items-center justify-between">
              <span className="text-white font-medium">Net</span>
              <span
                className={`font-bold text-lg ${
                  (stats?.thisMonthIncome || 0) - (stats?.thisMonthExpense || 0) >= 0
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}
              >
                {formatCurrency(
                  (stats?.thisMonthIncome || 0) - (stats?.thisMonthExpense || 0)
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Last Month Overview */}
        <div className="bg-surface-dark rounded-xl border border-surface-dark-lighter p-6">
          <h2 className="text-white font-semibold mb-4">Last Month</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <span className="material-symbols-outlined">arrow_downward</span>
                </div>
                <span className="text-white/80">Income</span>
              </div>
              <span className="text-emerald-400 font-semibold">
                {formatCurrency(stats?.lastMonthIncome || 0)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <span className="material-symbols-outlined">arrow_upward</span>
                </div>
                <span className="text-white/80">Expenses</span>
              </div>
              <span className="text-red-400 font-semibold">
                {formatCurrency(stats?.lastMonthExpense || 0)}
              </span>
            </div>
            <div className="border-t border-surface-dark-lighter pt-4 flex items-center justify-between">
              <span className="text-white font-medium">Net</span>
              <span
                className={`font-bold text-lg ${
                  (stats?.lastMonthIncome || 0) - (stats?.lastMonthExpense || 0) >= 0
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}
              >
                {formatCurrency(
                  (stats?.lastMonthIncome || 0) - (stats?.lastMonthExpense || 0)
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface-dark rounded-xl border border-surface-dark-lighter p-4">
        <form onSubmit={handleFilter} className="flex flex-col sm:flex-row gap-4">
          <select
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              setPage(1);
            }}
            className="h-10 px-4 bg-surface-dark-lighter border border-surface-dark-lighter rounded-lg text-white focus:outline-none focus:border-primary/50 transition-colors"
          >
            <option value="">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setPage(1);
            }}
            placeholder="From Date"
            className="h-10 px-4 bg-surface-dark-lighter border border-surface-dark-lighter rounded-lg text-white focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setPage(1);
            }}
            placeholder="To Date"
            className="h-10 px-4 bg-surface-dark-lighter border border-surface-dark-lighter rounded-lg text-white focus:outline-none focus:border-primary/50 transition-colors"
          />
          {(typeFilter || startDate || endDate) && (
            <button
              type="button"
              onClick={() => {
                setTypeFilter('');
                setStartDate('');
                setEndDate('');
                setPage(1);
              }}
              className="h-10 px-4 bg-surface-dark-lighter text-white/60 rounded-lg hover:text-white transition-colors"
            >
              Clear
            </button>
          )}
          <button
            type="submit"
            className="h-10 px-6 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Filter
          </button>
        </form>
      </div>

      {/* Transactions Table */}
      <div>
        <DataTable<Transaction>
          columns={columns}
          data={transactions?.data || []}
          keyExtractor={(transaction) => transaction.id}
          isLoading={isLoading}
          emptyMessage="No transactions found"
        />
        {transactions && (
          <Pagination
            currentPage={transactions.meta.page}
            totalPages={transactions.meta.totalPages}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
}





