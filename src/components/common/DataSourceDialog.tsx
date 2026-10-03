import React, { useEffect, useRef } from 'react';
import { ComponentItem } from '../../types';
import { DataSourcePanel } from './DataSourcePanel';

interface DataSourceDialogProps {
  open: boolean;
  onClose: () => void;
  comp: ComponentItem;
  data: Record<string, unknown>;
  onChange: (name: string, value: unknown) => void;
  onReset?: () => void;
}

/**
 * The data inputs (items, columns, options, regions...) of a component in the library's own dialog box:
 * draggable, resizable, maximisable, closes on Esc or backdrop click.
 */
export const DataSourceDialog: React.FC<DataSourceDialogProps> = ({ open, onClose, comp, data, onChange, onReset }) => {
  const ref = useRef<HTMLElement>(null);

  // Keep React state in step when the dialog closes itself (close button, Esc, backdrop)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = () => onClose();
    ['dialogClosed', 'afterClose'].forEach((e) => el.addEventListener(e, handler));
    return () => ['dialogClosed', 'afterClose'].forEach((e) => el.removeEventListener(e, handler));
  }, [onClose]);

  // The element is a property-driven custom element: set booleans as properties
  useEffect(() => {
    const el = ref.current as (HTMLElement & Record<string, unknown>) | null;
    if (!el) return;
    el.open = open;
  }, [open]);

  const Dialog = 'ui-dialog-box' as unknown as React.ElementType;

  return (
    <Dialog
      ref={ref}
      dialog-title="Data Source"
      subtitle={`<${comp.tag}> inputs`}
      icon="database"
      icon-library="lucide"
      width="820px"
      is-draggable
      resizable
      show-maximize
      show-footer="false"
      animation="scale"
    >
      <div slot="body" style={{ padding: '4px 4px 8px', maxHeight: '70vh', overflowY: 'auto' }}>
        <div className="flex items-center justify-between gap-3 mb-3 text-xs text-neutral-400">
          <span>Edit the JSON the component receives. Changes apply to the generated examples immediately.</span>
          {onReset && (
            <button onClick={onReset} className="px-2.5 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-200 cursor-pointer shrink-0">
              Reset to sample
            </button>
          )}
        </div>
        <DataSourcePanel comp={comp} data={data} onChange={onChange} bare />
      </div>
    </Dialog>
  );
};
