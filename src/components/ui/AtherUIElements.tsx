import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ChevronDown, 
  X, 
  Loader2, 
  ExternalLink, 
  Search, 
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

/* ========================================================
   1. ATHER BUTTON
   ======================================================== */
export interface AtherButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const AtherButton: React.FC<AtherButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  glow = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  onClick,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs py-1.5 px-3 rounded-md gap-1.5',
    md: 'text-sm py-2 px-4 rounded-lg gap-2',
    lg: 'text-base py-2.5 px-6 rounded-lg gap-2.5 font-medium',
    xl: 'text-lg py-3.5 px-8 rounded-xl gap-3 font-semibold'
  }[size];

  const variantClasses = {
    primary: 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium border border-sky-400/40 shadow-sm active:scale-[0.98]',
    secondary: 'bg-slate-800/90 hover:bg-slate-750 text-slate-100 border border-slate-700/60 active:scale-[0.98]',
    outline: 'bg-transparent hover:bg-sky-500/10 text-sky-400 border border-sky-500/40 hover:border-sky-400 active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white border border-transparent active:scale-[0.98]',
    neon: 'bg-gradient-to-r from-sky-400 via-cyan-400 to-purple-400 text-slate-950 font-semibold border border-white/20 active:scale-[0.98]',
    danger: 'bg-rose-600/90 hover:bg-rose-500 text-white font-medium border border-rose-500/50 active:scale-[0.98]'
  }[variant];

  const glowStyles = glow 
    ? 'shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]' 
    : '';

  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none ${sizeClasses} ${variantClasses} ${glowStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        startIcon && <span className="shrink-0">{startIcon}</span>
      )}
      <span className="truncate">{children}</span>
      {!loading && endIcon && <span className="shrink-0">{endIcon}</span>}
    </button>
  );
};

/* ========================================================
   2. ATHER INPUT
   ======================================================== */
export interface AtherInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
  status?: 'default' | 'error' | 'success' | 'warning';
  clearable?: boolean;
  disabled?: boolean;
  type?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: string;
  className?: string;
}

export const AtherInput: React.FC<AtherInputProps> = ({
  label,
  placeholder = 'Enter value...',
  value: controlledValue,
  onChange,
  status = 'default',
  clearable = false,
  disabled = false,
  type = 'text',
  prefix,
  suffix,
  helperText,
  className = ''
}) => {
  const [internalValue, setInternalValue] = useState('');
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
  };

  const statusBorderClasses = {
    default: 'border-slate-800 focus-within:border-sky-500/80 focus-within:shadow-[0_0_15px_rgba(56,189,248,0.2)]',
    error: 'border-rose-500/70 focus-within:border-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.15)]',
    success: 'border-emerald-500/70 focus-within:border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
    warning: 'border-amber-500/70 focus-within:border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
  }[status];

  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {label && (
        <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
          <span>{label}</span>
          {status === 'error' && <span className="text-rose-400 text-[11px]">Required field</span>}
        </label>
      )}
      <div className={`relative flex items-center bg-slate-900/80 rounded-lg border transition-all duration-200 px-3 py-2 text-sm text-slate-100 ${statusBorderClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {prefix && <span className="text-slate-400 mr-2.5 shrink-0">{prefix}</span>}
        <input
          type={type}
          disabled={disabled}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="bg-transparent border-none outline-none w-full placeholder:text-slate-500 text-slate-100 text-sm"
        />
        {clearable && currentValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        {suffix && <span className="text-slate-400 ml-2 shrink-0">{suffix}</span>}
      </div>
      {helperText && (
        <span className="text-[11px] text-slate-400 mt-0.5">{helperText}</span>
      )}
    </div>
  );
};

/* ========================================================
   3. ATHER CARD
   ======================================================== */
export interface AtherCardProps {
  children: React.ReactNode;
  elevation?: 'flat' | 'glass' | 'elevated' | 'floating';
  glowBorder?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AtherCard: React.FC<AtherCardProps> = ({
  children,
  elevation = 'glass',
  glowBorder = false,
  header,
  footer,
  className = '',
  onClick
}) => {
  const elevationClasses = {
    flat: 'bg-slate-900 border border-slate-800',
    glass: 'bg-slate-900/80 border border-white/10 shadow-lg',
    elevated: 'bg-slate-900/95 border border-slate-700/60 shadow-2xl',
    floating: 'bg-slate-900/95 border border-sky-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'
  }[elevation];

  const glowBorderClass = glowBorder 
    ? 'relative before:absolute before:-inset-[1px] before:rounded-[inherit] before:bg-gradient-to-r before:from-sky-500/40 before:via-purple-500/30 before:to-cyan-500/40 before:z-[-1]' 
    : '';

  return (
    <div 
      onClick={onClick}
      className={`rounded-xl overflow-hidden transition-all duration-300 text-left ${elevationClasses} ${glowBorderClass} ${className}`}
    >
      {header && (
        <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
          {header}
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
      {footer && (
        <div className="px-5 py-3 border-t border-white/5 bg-slate-950/40 text-xs text-slate-400 flex items-center justify-between">
          {footer}
        </div>
      )}
    </div>
  );
};

/* ========================================================
   4. ATHER BADGE
   ======================================================== */
export interface AtherBadgeProps {
  children: React.ReactNode;
  variant?: 'subtle' | 'outline' | 'solid' | 'glow';
  pulse?: boolean;
  color?: 'sky' | 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'slate';
  className?: string;
}

export const AtherBadge: React.FC<AtherBadgeProps> = ({
  children,
  variant = 'subtle',
  pulse = false,
  color = 'sky',
  className = ''
}) => {
  const colorMap = {
    sky: {
      subtle: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
      outline: 'bg-transparent text-sky-400 border border-sky-400/40',
      solid: 'bg-sky-500 text-slate-950 font-semibold',
      glow: 'bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.35)]',
      dot: 'bg-sky-400'
    },
    cyan: {
      subtle: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
      outline: 'bg-transparent text-cyan-400 border border-cyan-400/40',
      solid: 'bg-cyan-500 text-slate-950 font-semibold',
      glow: 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.35)]',
      dot: 'bg-cyan-400'
    },
    purple: {
      subtle: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      outline: 'bg-transparent text-purple-400 border border-purple-400/40',
      solid: 'bg-purple-500 text-white font-semibold',
      glow: 'bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.35)]',
      dot: 'bg-purple-400'
    },
    emerald: {
      subtle: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      outline: 'bg-transparent text-emerald-400 border border-emerald-400/40',
      solid: 'bg-emerald-500 text-slate-950 font-semibold',
      glow: 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.35)]',
      dot: 'bg-emerald-400'
    },
    amber: {
      subtle: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
      outline: 'bg-transparent text-amber-400 border border-amber-400/40',
      solid: 'bg-amber-500 text-slate-950 font-semibold',
      glow: 'bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.35)]',
      dot: 'bg-amber-400'
    },
    rose: {
      subtle: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
      outline: 'bg-transparent text-rose-400 border border-rose-400/40',
      solid: 'bg-rose-500 text-white font-semibold',
      glow: 'bg-rose-500/20 text-rose-300 border border-rose-400/40 shadow-[0_0_12px_rgba(244,63,94,0.35)]',
      dot: 'bg-rose-400'
    },
    slate: {
      subtle: 'bg-slate-800 text-slate-300 border border-slate-700/60',
      outline: 'bg-transparent text-slate-300 border border-slate-700',
      solid: 'bg-slate-700 text-white',
      glow: 'bg-slate-800 text-slate-200 border border-slate-600 shadow-sm',
      dot: 'bg-slate-400'
    }
  }[color];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${colorMap[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colorMap.dot}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${colorMap.dot}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

/* ========================================================
   5. ATHER TABS
   ======================================================== */
export interface AtherTabsProps {
  tabs: { id: string; label: string; count?: number }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const AtherTabs: React.FC<AtherTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = ''
}) => {
  return (
    <div className={`inline-flex p-1 bg-slate-900/90 border border-slate-800 rounded-xl relative ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              isActive 
                ? 'text-white bg-slate-800 border border-slate-700/80 shadow-md shadow-black/40' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full tabular-nums ${
                isActive ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-400'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

/* ========================================================
   6. ATHER SELECT
   ======================================================== */
export interface AtherSelectProps {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string; sub?: string }[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const AtherSelect: React.FC<AtherSelectProps> = ({
  label,
  placeholder = 'Select option...',
  options,
  value,
  onChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <div className={`relative flex flex-col gap-1.5 text-left ${className}`}>
      {label && <label className="text-xs font-medium text-slate-300">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-slate-900/90 border border-slate-800 hover:border-slate-700 px-3 py-2 rounded-lg text-sm text-slate-100 transition-colors cursor-pointer"
      >
        <span className={selected ? 'text-slate-100' : 'text-slate-500'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-xl shadow-2xl py-1 max-h-52 overflow-y-auto">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`px-3 py-2 text-xs flex items-center justify-between cursor-pointer hover:bg-slate-800/80 transition-colors ${
                opt.value === value ? 'text-sky-400 bg-sky-500/10 font-medium' : 'text-slate-200'
              }`}
            >
              <div>
                <div>{opt.label}</div>
                {opt.sub && <div className="text-[10px] text-slate-400">{opt.sub}</div>}
              </div>
              {opt.value === value && <Check className="w-3.5 h-3.5 text-sky-400" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ========================================================
   7. ATHER CHART (GPU Accelerated Vector Micro-Chart)
   ======================================================== */
export const AtherChart: React.FC<{
  data?: number[];
  color?: string;
  glow?: boolean;
  height?: number;
  label?: string;
}> = ({
  data = [35, 42, 68, 55, 78, 85, 92, 88, 96, 104, 118, 126],
  color = '#38bdf8',
  glow = true,
  height = 90,
  label = 'Hydration Speed (req/ms)'
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const width = 360;
  const padding = 10;
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  const points = data.map((val, idx) => {
    const x = padding + (idx / (data.length - 1)) * usableWidth;
    const y = height - padding - ((val - min) / range) * usableHeight;
    return { x, y, val };
  });

  const pathD = points.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${height} L ${points[0].x},${height} Z`;

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
        <span>{label}</span>
        <span className="font-mono text-sky-400 font-medium tabular-nums">
          {hoverIndex !== null ? `${data[hoverIndex]} ms` : `${data[data.length - 1]} ms`}
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        onMouseLeave={() => setHoverIndex(null)}
      >
        <defs>
          <linearGradient id={`chart-grad-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
          {glow && (
            <filter id={`chart-glow-${color}`} x1="-20%" y1="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor={color} floodOpacity="0.6" />
            </filter>
          )}
        </defs>

        {/* Grid lines */}
        <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#334155" strokeDasharray="3 3" opacity="0.4" />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#334155" opacity="0.3" />

        {/* Area fill */}
        <path d={areaD} fill={`url(#chart-grad-${color})`} />

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          filter={glow ? `url(#chart-glow-${color})` : undefined}
        />

        {/* Points and hover crosshairs */}
        {points.map((pt, i) => (
          <g key={i} onMouseEnter={() => setHoverIndex(i)} className="cursor-pointer">
            <circle
              cx={pt.x}
              cy={pt.y}
              r={hoverIndex === i ? 5 : 2.5}
              fill={hoverIndex === i ? '#ffffff' : color}
              stroke="#0f172a"
              strokeWidth="1.5"
              className="transition-all duration-150"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

/* ========================================================
   8. ATHER TOAST (Inline or Global)
   ======================================================== */
export const AtherToast: React.FC<{
  type?: 'info' | 'success' | 'warning' | 'error';
  message: string;
  onDismiss?: () => void;
}> = ({
  type = 'info',
  message,
  onDismiss
}) => {
  const styles = {
    info: 'border-sky-500/40 bg-slate-900/90 text-sky-200 shadow-[0_10px_30px_rgba(56,189,248,0.15)]',
    success: 'border-emerald-500/40 bg-slate-900/90 text-emerald-200 shadow-[0_10px_30px_rgba(16,185,129,0.15)]',
    warning: 'border-amber-500/40 bg-slate-900/90 text-amber-200 shadow-[0_10px_30px_rgba(245,158,11,0.15)]',
    error: 'border-rose-500/40 bg-slate-900/90 text-rose-200 shadow-[0_10px_30px_rgba(244,63,94,0.15)]'
  }[type];

  return (
    <div className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl border text-xs font-medium animate-float ${styles}`}>
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
        <span>{message}</span>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-slate-400 hover:text-white p-1 rounded transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
