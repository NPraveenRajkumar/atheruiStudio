export type ComponentCategory = 
  | 'Forms' 
  | 'Navigation' 
  | 'Data Display' 
  | 'Feedback' 
  | 'Layout' 
  | 'Utility';

export type Framework = 'HTML' | 'Stencil' | 'React' | 'Angular' | 'Vue';

export interface ComponentProp {
  name: string;
  attr?: string;
  type: string;
  default: string;
  required?: boolean;
  readonly?: boolean;
  description: string;
  options?: string[];
}

export interface ComponentEvent {
  name: string;
  detail: string;
  description: string;
}

export interface ComponentSlot {
  name: string;
  description: string;
}

export interface ComponentItem {
  id: string;
  name: string;
  tag: string;
  category: ComponentCategory;
  description: string;
  totalProps: number;
  totalEvents: number;
  variantsCount: number;
  status: 'stable' | 'beta' | 'new';
  orbitRadius?: number; // for hero solar system
  orbitSpeed?: number;
  angleOffset?: number;
  color: string;
  props: ComponentProp[];
  events: ComponentEvent[];
  slots: ComponentSlot[];
  usageCode: {
    html: string;
    stencil: string;
    react: string;
    angular: string;
    vue: string;
  };
}

export interface ThemeConfig {
  id: string;
  name: string;
  primaryColor: string;
  accentColor: string;
  bgCanvas: string;
  surfaceColor: string;
  borderColor: string;
  borderRadius: string;
  fontFamily: string;
  glowStrength: string;
  spacingScale: number;
}
