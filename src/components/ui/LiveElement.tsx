import React, { useEffect, useRef, useState } from 'react';
import { PREVIEW } from '../../data/previewTemplates';
import { mountPreview, Mounted } from '../../utils/mountPreview';

interface LiveElementProps {
  tag: string;
  props?: Record<string, unknown>;
  text?: string;
}

/**
 * Renders a real Stencil custom element and assigns props as DOM properties.
 * Components that need a parent, children or to be opened use the templates in previewTemplates.ts.
 */
export const LiveElement: React.FC<LiveElementProps> = ({ tag, props, text }) => {
  const host = useRef<HTMLDivElement>(null);
  const targets = useRef<HTMLElement[]>([]);
  const [ready, setReady] = useState(0);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const stage = host.current;
    if (!stage) return;
    let cancelled = false;
    let mounted: Mounted | null = null;
    targets.current = [];
    setMissing(false);
    mountPreview(tag, stage).then((m) => {
      if (cancelled) {
        if (!('missing' in m)) m.cleanup();
        return;
      }
      if ('missing' in m) {
        setMissing(true);
        return;
      }
      mounted = m;
      targets.current = m.targets;
      setReady((n) => n + 1);
    });
    return () => {
      cancelled = true;
      mounted?.cleanup();
    };
  }, [tag]);

  useEffect(() => {
    const spec = PREVIEW[tag] ?? {};
    targets.current.forEach((el: any) => {
      Object.entries({ ...(spec.props ?? {}), ...(props ?? {}) }).forEach(([k, v]) => (el[k] = v));
      if (text !== undefined && !spec.children) el.textContent = text;
    });
  }, [props, text, ready, tag]);

  return (
    <>
      <div ref={host} className="flex flex-wrap items-center justify-center gap-4" />
      {missing && <p className="text-[11px] text-neutral-500">&lt;{tag}&gt; is not available in the bundled library version.</p>}
    </>
  );
};
