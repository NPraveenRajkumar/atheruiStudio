import React, { useEffect, useRef, useState } from 'react';
import { Database, Upload, Wand2, Trash2, ChevronDown, ChevronRight, Maximize2 } from 'lucide-react';
import { ComponentItem } from '../../types';
import { dataPropsOf, sampleFor } from '../../data/sample';

interface DataSourcePanelProps {
  comp: ComponentItem;
  data: Record<string, unknown>;
  onChange: (name: string, value: unknown) => void;
  className?: string;
  /** No frame or heading (used inside a dialog that supplies its own). */
  bare?: boolean;
  /** Shows a button in the header that opens the data in a larger editor (a dialog). */
  onExpand?: () => void;
}

const pretty = (v: unknown) => (v === undefined ? '' : JSON.stringify(v, null, 2));

const Field: React.FC<{
  name: string;
  type: string;
  description: string;
  value: unknown;
  sample: unknown;
  onChange: (v: unknown) => void;
}> = ({ name, type, description, value, sample, onChange }) => {
  const [text, setText] = useState(pretty(value));
  const [error, setError] = useState<string | null>(null);
  const file = useRef<HTMLInputElement>(null);

  // Keep the editor in sync when the value is replaced from outside (component switch, sample, reset).
  useEffect(() => {
    setText(pretty(value));
    setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(value)]);

  const commit = (raw: string) => {
    setText(raw);
    if (raw.trim() === '') {
      setError(null);
      onChange(undefined);
      return;
    }
    try {
      onChange(JSON.parse(raw));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const importFile = async (f?: File) => {
    if (!f) return;
    commit(await f.text());
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <label className="text-xs font-mono font-medium text-neutral-300">{name}</label>
        <div className="flex items-center gap-1">
          {sample !== undefined && (
            <button
              onClick={() => commit(pretty(sample))}
              title="Load sample data"
              className="p-1 rounded text-neutral-400 hover:text-sky-300 hover:bg-neutral-900 cursor-pointer"
            >
              <Wand2 className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={() => file.current?.click()}
            title="Import a .json file"
            className="p-1 rounded text-neutral-400 hover:text-sky-300 hover:bg-neutral-900 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => commit('')}
            title="Clear"
            className="p-1 rounded text-neutral-400 hover:text-rose-400 hover:bg-neutral-900 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <input ref={file} type="file" accept=".json,application/json" className="hidden" onChange={(e) => importFile(e.target.files?.[0])} />
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => commit(e.target.value)}
        spellCheck={false}
        rows={Math.min(12, Math.max(4, text.split('\n').length))}
        placeholder={`JSON for ${name}`}
        className={`w-full bg-black border rounded-lg px-3 py-2 text-[11px] font-mono text-sky-200 focus:outline-none resize-y ${
          error ? 'border-rose-500' : 'border-neutral-800 focus:border-sky-500'
        }`}
      />
      {error ? (
        <p className="text-[10px] text-rose-400">{error}</p>
      ) : (
        <p className="text-[10px] text-neutral-500 leading-snug">
          <span className="font-mono text-neutral-600">{type.length > 60 ? type.slice(0, 60) + '…' : type}</span>
          {description && <> · {description}</>}
        </p>
      )}
    </div>
  );
};

/**
 * Editable data inputs (items, columns, options, regions…) for components that render from data.
 * Framed, it is an accordion that starts closed: the data rarely changes, so it should not take the inspector's space.
 */
export const DataSourcePanel: React.FC<DataSourcePanelProps> = ({ comp, data, onChange, className = '', bare, onExpand }) => {
  const props = dataPropsOf(comp);
  const sample = sampleFor(comp.id);
  const [open, setOpen] = useState(false);
  // A newly picked component starts closed again
  useEffect(() => setOpen(false), [comp.id]);
  if (props.length === 0) return null;
  const shown = bare || open;

  return (
    <div className={`${bare ? '' : 'border border-neutral-900 rounded-xl'} ${className}`}>
      <div className={`${bare ? 'hidden' : 'flex'} items-center gap-1 pr-1.5`}>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="flex-1 flex items-center justify-between gap-2 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-neutral-300 hover:text-white cursor-pointer"
        >
          <span className="flex items-center gap-1.5">
            {open ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <Database className="w-3 h-3 text-sky-400" /> Data Source
          </span>
          <span className="font-mono text-[10px] font-normal normal-case text-neutral-500">
            {props.filter((p) => data[p.name] !== undefined).length}/{props.length} set
          </span>
        </button>
        {onExpand && (
          <button
            onClick={onExpand}
            title="Edit in a dialog"
            className="p-1.5 rounded text-neutral-400 hover:text-sky-300 hover:bg-neutral-900 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <div className={`${bare ? '' : 'px-3 pb-3 pt-3 border-t border-neutral-900'} space-y-4 ${shown ? '' : 'hidden'}`}>
        {props.map((p) => (
          <Field
            key={`${comp.id}-${p.name}`}
            name={p.name}
            type={p.type}
            description={p.description}
            value={data[p.name]}
            sample={sample[p.name]}
            onChange={(v) => onChange(p.name, v)}
          />
        ))}
      </div>
    </div>
  );
};
