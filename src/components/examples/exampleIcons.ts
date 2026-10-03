import {
  Accessibility, Activity, ArrowLeftRight, Bell, Boxes, Brush, Building2, Calendar, CircleDot, Clapperboard, Clock, Code2,
  Columns3, Crown, Database, Eye, FileText, Filter, Flag, Gamepad2, Globe, Hash, Image, Keyboard, Languages, LayoutGrid,
  Layers, Link2, ListChecks, Loader2, Lock, Maximize2, MousePointerClick, Palette, Play, Puzzle, Radio, Rows3, Ruler,
  Search, Settings2, Shapes, ShieldCheck, SlidersHorizontal, Smile, Sparkles, Square, Star, Table, Tag, ToggleRight,
  Type, Upload, Zap, type LucideIcon,
} from 'lucide-react';

/** First matching rule wins, so the specific ones come first. Matched against the example title (and prop name). */
const RULES: [RegExp, LucideIcon][] = [
  [/data source/i, Database],
  [/boolean flags?/i, ToggleRight],
  [/event|log|monitor/i, Activity],
  [/playground|workbench|interactive|configur/i, Settings2],
  [/god mode|elite|enterprise|premium|master/i, Crown],
  [/gradient|glass|high-fidelity|aurora|glow/i, Sparkles],
  [/color|colour|palette|theme|surface/i, Palette],
  [/shape|radius|radii|corner|pill/i, Shapes],
  [/size|width|height|dimension|density|fit/i, Ruler],
  [/variant|style|appearance|look/i, Brush],
  [/icon/i, Star],
  [/image|avatar|photo|cover|illustration/i, Image],
  [/search|filter/i, Search],
  [/multi|select all|chip|checkbox|check/i, ListChecks],
  [/cascad|tree|nested|hierarch|level|folder/i, Layers],
  [/dropdown|menu|popover/i, ArrowLeftRight],
  [/vertical|orientation|horizontal|direction|group|stack|layout|grid|gallery/i, LayoutGrid],
  [/row/i, Rows3],
  [/column/i, Columns3],
  [/state|status|disabled|readonly|read only|invalid|error|validation|success|warning/i, CircleDot],
  [/load|skeleton|spinner|progress|busy/i, Loader2],
  [/form|native|submit/i, FileText],
  [/password|secure|secret|lock/i, Lock],
  [/rtl|language|locale|i18n|translat/i, Languages],
  [/access|a11y|aria|keyboard nav/i, Accessibility],
  [/keyboard|shortcut|hotkey/i, Keyboard],
  [/animat|reveal|motion|transition|scroll/i, Clapperboard],
  [/sound|audio|haptic|shatter|effect/i, Zap],
  [/date|calendar|month|time/i, Calendar],
  [/timer|clock|countdown/i, Clock],
  [/table|grid data|columns|rows/i, Table],
  [/tag|label|badge|chip/i, Tag],
  [/upload|file|drop/i, Upload],
  [/link|anchor|href/i, Link2],
  [/number|count|digit|otp|pin/i, Hash],
  [/text|typography|font|title|input|type/i, Type],
  [/notif|toast|snack|alert|banner/i, Bell],
  [/compos|combin|integrat|real.?world|use case/i, Puzzle],
  [/full ?screen|expand|maximi|resiz/i, Maximize2],
  [/click|interact|toggle|button|action|trigger/i, MousePointerClick],
  [/emoji|smile|fun/i, Smile],
  [/global|region|country|world|location/i, Globe],
  [/company|org|business|enterprise/i, Building2],
  [/secur|permission|auth|safe/i, ShieldCheck],
  [/flag/i, Flag],
  [/slider|range|knob|value/i, SlidersHorizontal],
  [/play|demo|example|basic|default|standard|simple/i, Play],
  [/code|snippet|api|method/i, Code2],
  [/radio|single/i, Radio],
  [/box|container|panel|card/i, Boxes],
];

/** Icon for an example's index link. Prop-value cards (`prop-<name>`) are matched on the prop name. */
export function iconForExample(key: string, title: string): LucideIcon {
  const text = key.startsWith('prop-') ? key.slice(5).replace(/([A-Z])/g, ' $1') : title;
  for (const [re, icon] of RULES) if (re.test(text)) return icon;
  return Square;
}
