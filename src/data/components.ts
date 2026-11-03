import { ComponentItem, ComponentCategory } from '../types';

// Generated from atherui (npraveen) src/docs.json — Stencil component metadata.
export const ALL_COMPONENTS: ComponentItem[] = [
  {
    id: "button",
    name: "Button",
    tag: "ui-button",
    category: "Forms",
    description: "A comprehensive, feature-rich button component with multiple variants, sizes, states, and customization options.",
    totalProps: 54,
    totalEvents: 1,
    variantsCount: 9,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 173,
    color: "#22d3ee",
    props: [
      {
        name: "align",
        attr: "align",
        type: "\"center\" | \"end\" | \"start\"",
        default: "'center'",
        description: "Content alignment within button: 'start' | 'center' | 'end'",
        options: [
          "center",
          "end",
          "start"
        ]
      },
      {
        name: "ariaLabel",
        attr: "aria-label",
        type: "string",
        default: "",
        description: "Accessible label override (especially useful for icon-only buttons)"
      },
      {
        name: "avatarAlt",
        attr: "avatar-alt",
        type: "string",
        default: "",
        description: "Alt text for avatar-btn"
      },
      {
        name: "avatarSrc",
        attr: "avatar-src",
        type: "string",
        default: "",
        description: "Avatar source for avatar button"
      },
      {
        name: "avatarStatus",
        attr: "avatar-status",
        type: "\"\" | \"away\" | \"busy\" | \"dnd\" | \"offline\" | \"online\"",
        default: "''",
        description: "Status dot for avatar: 'online', 'offline', 'busy', 'away'",
        options: [
          "away",
          "busy",
          "dnd",
          "offline",
          "online"
        ]
      },
      {
        name: "badge",
        attr: "badge",
        type: "number | string",
        default: "",
        description: "Badge content"
      },
      {
        name: "badgeColor",
        attr: "badge-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'danger'",
        description: "Badge color variant (primary, success, danger, etc.)",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "badgeCustomColor",
        attr: "badge-custom-color",
        type: "string",
        default: "",
        description: "Custom background color for the badge"
      },
      {
        name: "badgeCustomTextColor",
        attr: "badge-custom-text-color",
        type: "string",
        default: "",
        description: "Custom text color for the badge"
      },
      {
        name: "badgePosition",
        attr: "badge-position",
        type: "\"bottom-left\" | \"bottom-right\" | \"inline-left\" | \"inline-right\" | \"top-left\" | \"top-right\"",
        default: "'top-right'",
        description: "Badge position",
        options: [
          "bottom-left",
          "bottom-right",
          "inline-left",
          "inline-right",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "circle",
        attr: "circle",
        type: "boolean",
        default: "false",
        description: "Circle-shaped (shorthand for shape=\"circle\")"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'none'",
        description: "Button color",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "copyValue",
        attr: "copy-value",
        type: "string",
        default: "",
        description: "Text to copy to clipboard when clicked. Shows feedback icon."
      },
      {
        name: "counter",
        attr: "counter",
        type: "number | string",
        default: "",
        description: "Counter badge content (inline right side of text)"
      },
      {
        name: "counterColor",
        attr: "counter-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "",
        description: "Counter badge color variant (primary, success, danger, etc.)",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "counterCustomColor",
        attr: "counter-custom-color",
        type: "string",
        default: "",
        description: "Custom background color for the counter badge"
      },
      {
        name: "counterCustomTextColor",
        attr: "counter-custom-text-color",
        type: "string",
        default: "",
        description: "Custom text color for the counter badge"
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "",
        description: "Description text (alias for subtitle, common in toggle contexts)"
      },
      {
        name: "descriptionPosition",
        attr: "description-position",
        type: "\"above\" | \"below\" | \"left\" | \"right\"",
        default: "'below'",
        description: "Position of the description/subtitle: 'above' | 'below' | 'left' | 'right'",
        options: [
          "above",
          "below",
          "left",
          "right"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "elevation",
        attr: "elevation",
        type: "number",
        default: "",
        description: "Elevation level (0-5)"
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: "Full width button (shorthand for width=\"100%\")"
      },
      {
        name: "grow",
        attr: "grow",
        type: "boolean",
        default: "false",
        description: "If true, the button will grow to fill available space in a flex container"
      },
      {
        name: "href",
        attr: "href",
        type: "string",
        default: "",
        description: "Link URL. If set, renders as an anchor tag."
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: "Optional icon content (can be name, SVG path, URL, or emoji)"
      },
      {
        name: "iconColor",
        attr: "icon-color",
        type: "string",
        default: "'currentColor'",
        description: "Optional override for icon color"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'lucide'",
        description: "Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.)",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconOnly",
        attr: "icon-only",
        type: "boolean",
        default: "false",
        description: "Render icon only (no label)"
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"bottom\" | \"left\" | \"none\" | \"right\" | \"top\"",
        default: "'left'",
        description: "Icon position relative to label",
        options: [
          "bottom",
          "left",
          "none",
          "right",
          "top"
        ]
      },
      {
        name: "iconSize",
        attr: "icon-size",
        type: "number | string",
        default: "",
        description: "Optional override for icon size"
      },
      {
        name: "imgAlt",
        attr: "img-alt",
        type: "string",
        default: "",
        description: "Alt text for image button"
      },
      {
        name: "imgSrc",
        attr: "img-src",
        type: "string",
        default: "",
        description: "Image source for image button"
      },
      {
        name: "justify",
        attr: "justify",
        type: "\"around\" | \"between\" | \"center\" | \"end\" | \"start\"",
        default: "'center'",
        description: "Content justification: 'start' | 'center' | 'end' | 'between' | 'around'",
        options: [
          "around",
          "between",
          "center",
          "end",
          "start"
        ]
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Button label text"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state (shows spinner)"
      },
      {
        name: "loadingPosition",
        attr: "loading-position",
        type: "\"bottom\" | \"center\" | \"icon\" | \"left\" | \"none\" | \"right\" | \"top\"",
        default: "'left'",
        description: "Loading spinner position",
        options: [
          "bottom",
          "center",
          "icon",
          "left",
          "none",
          "right",
          "top"
        ]
      },
      {
        name: "minWidth",
        attr: "min-width",
        type: "string",
        default: "",
        description: "Custom min-width"
      },
      {
        name: "noRipple",
        attr: "no-ripple",
        type: "boolean",
        default: "false",
        description: "Disable ripple effect"
      },
      {
        name: "pill",
        attr: "pill",
        type: "boolean",
        default: "false",
        description: "Pill-shaped (legacy override)"
      },
      {
        name: "progress",
        attr: "progress",
        type: "number",
        default: "",
        description: "Progress fill (0–100). Shows a background fill bar."
      },
      {
        name: "rel",
        attr: "rel",
        type: "string",
        default: "",
        description: "Link relationships"
      },
      {
        name: "reveal",
        attr: "reveal",
        type: "\"fade-in\" | \"none\" | \"slide-up\" | \"zoom\"",
        default: "'none'",
        description: "Reveal animation type",
        options: [
          "fade-in",
          "none",
          "slide-up",
          "zoom"
        ]
      },
      {
        name: "revealDelay",
        attr: "reveal-delay",
        type: "number",
        default: "0",
        description: "Reveal delay in ms"
      },
      {
        name: "rounded",
        attr: "rounded",
        type: "boolean",
        default: "true",
        description: "Rounded corner style (legacy override)"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "selected",
        attr: "selected",
        type: "boolean",
        default: "false",
        description: "Selected state (for toggle groups)"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'rounded'",
        description: "Button shape",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Size",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "subtitle",
        attr: "subtitle",
        type: "string",
        default: "",
        description: "Optional subtitle text (shown above/below main label)"
      },
      {
        name: "target",
        attr: "target",
        type: "string",
        default: "",
        description: "Link target"
      },
      {
        name: "type",
        attr: "type",
        type: "\"button\" | \"image\" | \"reset\" | \"submit\"",
        default: "'button'",
        description: "Button type: 'button', 'submit', 'reset', 'image'",
        options: [
          "button",
          "image",
          "reset",
          "submit"
        ]
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "",
        description: "Values associated with the button (for use in groups)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"accordion\" | \"ghost\" | \"glass\" | \"link\" | \"none\" | \"outline\" | \"primary\" | \"secondary\" | \"soft\"",
        default: "'outline'",
        description: "Visual variant",
        options: [
          "accordion",
          "ghost",
          "glass",
          "link",
          "none",
          "outline",
          "primary",
          "secondary",
          "soft"
        ]
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "",
        description: "Custom width (e.g., '100%', '200px', 'auto')"
      }
    ],
    events: [
      {
        name: "buttonClick",
        detail: "MouseEvent",
        description: "Click event"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-button align=\"center\" avatar-status=\"\" badge-color=\"danger\"></ui-button>",
      stencil: "<ui-button align=\"center\" avatar-status=\"\" badge-color=\"danger\"></ui-button>",
      react: "export default function Example() {\n  return <ui-button align=\"center\" avatar-status=\"\" badge-color=\"danger\"></ui-button>;\n}",
      angular: "<ui-button align=\"center\" avatar-status=\"\" badge-color=\"danger\"></ui-button>",
      vue: "<template>\n  <UiButton align=\"center\" avatar-status=\"\" badge-color=\"danger\"></UiButton>\n</template>"
    }
  },
  {
    id: "input",
    name: "Input",
    tag: "ui-input",
    category: "Forms",
    description: "Input web component (<ui-input>).",
    totalProps: 113,
    totalEvents: 17,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 49,
    color: "#fb7185",
    props: [
      {
        name: "accept",
        attr: "accept",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "allowedChars",
        attr: "allowed-chars",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "alphaOnly",
        attr: "alpha-only",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "alwaysFloated",
        attr: "always-floated",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "autoCapitalize",
        attr: "auto-capitalize",
        type: "\"characters\" | \"none\" | \"sentences\" | \"words\"",
        default: "'none'",
        description: "",
        options: [
          "characters",
          "none",
          "sentences",
          "words"
        ]
      },
      {
        name: "autoResize",
        attr: "auto-resize",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "autoSelect",
        attr: "auto-select",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "autoTrim",
        attr: "auto-trim",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "autocomplete",
        attr: "autocomplete",
        type: "string",
        default: "'off'",
        description: ""
      },
      {
        name: "autocompleteSuggestions",
        type: "{ text: string; subtitle?: string; icon?: string; value?: any; }[]",
        default: "[]",
        description: ""
      },
      {
        name: "autofocus",
        attr: "autofocus",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "backdropSheen",
        attr: "backdrop-sheen",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "blockInvalidPaste",
        attr: "block-invalid-paste",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "clearIcon",
        attr: "clear-icon",
        type: "string",
        default: "'x-circle'",
        description: ""
      },
      {
        name: "clearOnEscape",
        attr: "clear-on-escape",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "cols",
        attr: "cols",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "currency",
        attr: "currency",
        type: "string",
        default: "'USD'",
        description: ""
      },
      {
        name: "customClass",
        attr: "custom-class",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "customMask",
        attr: "custom-mask",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "customTabIndex",
        attr: "custom-tab-index",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "debounce",
        attr: "debounce",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "defaultValue",
        attr: "default-value",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "density",
        attr: "density",
        type: "\"compact\" | \"cozy\" | \"standard\"",
        default: "'standard'",
        description: "",
        options: [
          "compact",
          "cozy",
          "standard"
        ]
      },
      {
        name: "dirtyTracking",
        attr: "dirty-tracking",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "dropZone",
        attr: "drop-zone",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "enterkeyhint",
        attr: "enterkeyhint",
        type: "\"done\" | \"enter\" | \"go\" | \"next\" | \"previous\" | \"search\" | \"send\"",
        default: "",
        description: "",
        options: [
          "done",
          "enter",
          "go",
          "next",
          "previous",
          "search",
          "send"
        ]
      },
      {
        name: "errorText",
        attr: "error-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "floatingLabel",
        attr: "floating-label",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "formatter",
        type: "(value: string) => string",
        default: "",
        description: ""
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "ghostText",
        attr: "ghost-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "gradientBorder",
        attr: "gradient-border",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "gradientDecorators",
        attr: "gradient-decorators",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "highlightMatches",
        attr: "highlight-matches",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "hintTooltip",
        attr: "hint-tooltip",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "infoText",
        attr: "info-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "inputId",
        attr: "input-id",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "inputmode",
        attr: "inputmode",
        type: "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
        default: "",
        description: "",
        options: [
          "decimal",
          "email",
          "none",
          "numeric",
          "search",
          "tel",
          "text",
          "url"
        ]
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "linearLoading",
        attr: "linear-loading",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "mask",
        attr: "mask",
        type: "\"credit-card\" | \"currency\" | \"date\" | \"none\" | \"phone\" | \"ssn\" | \"zip\"",
        default: "'none'",
        description: "",
        options: [
          "credit-card",
          "currency",
          "date",
          "none",
          "phone",
          "ssn",
          "zip"
        ]
      },
      {
        name: "max",
        attr: "max",
        type: "number | string",
        default: "",
        description: ""
      },
      {
        name: "maxLength",
        attr: "max-length",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "maxLengthIndicator",
        attr: "max-length-indicator",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "maxRows",
        attr: "max-rows",
        type: "number",
        default: "5",
        description: ""
      },
      {
        name: "min",
        attr: "min",
        type: "number | string",
        default: "",
        description: ""
      },
      {
        name: "minLength",
        attr: "min-length",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "minLengthIndicator",
        attr: "min-length-indicator",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "minRows",
        attr: "min-rows",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "multiline",
        attr: "multiline",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "multiple",
        attr: "multiple",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "noSpaces",
        attr: "no-spaces",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "numericOnly",
        attr: "numeric-only",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "otpLength",
        attr: "otp-length",
        type: "number",
        default: "6",
        description: ""
      },
      {
        name: "parser",
        type: "(value: string) => string",
        default: "",
        description: ""
      },
      {
        name: "passwordIcon",
        attr: "password-icon",
        type: "string",
        default: "'eye'",
        description: ""
      },
      {
        name: "passwordStrengthCalculator",
        type: "(password: string) => number",
        default: "",
        description: ""
      },
      {
        name: "passwordVisibleIcon",
        attr: "password-visible-icon",
        type: "string",
        default: "'eye-off'",
        description: ""
      },
      {
        name: "pattern",
        attr: "pattern",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "prefixClickable",
        attr: "prefix-clickable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "prefixColor",
        attr: "prefix-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "prefixIcon",
        attr: "prefix-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "prefixText",
        attr: "prefix-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "relativeTime",
        attr: "relative-time",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "resize",
        attr: "resize",
        type: "\"both\" | \"horizontal\" | \"none\" | \"vertical\"",
        default: "'vertical'",
        description: "",
        options: [
          "both",
          "horizontal",
          "none",
          "vertical"
        ]
      },
      {
        name: "revealOnHold",
        attr: "reveal-on-hold",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "rippleEffect",
        attr: "ripple-effect",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "rows",
        attr: "rows",
        type: "number",
        default: "3",
        description: ""
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "selectOnClick",
        attr: "select-on-click",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "shake",
        attr: "shake",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "shakeOnError",
        attr: "shake-on-error",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "shortcutHint",
        attr: "shortcut-hint",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "showClear",
        attr: "show-clear",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showCopy",
        attr: "show-copy",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showCounter",
        attr: "show-counter",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showDividers",
        attr: "show-dividers",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showPasswordStrength",
        attr: "show-password-strength",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showPasswordToggle",
        attr: "show-password-toggle",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showProgressCircle",
        attr: "show-progress-circle",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showSteppers",
        attr: "show-steppers",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showTypeIcon",
        attr: "show-type-icon",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "statusIndicator",
        attr: "status-indicator",
        type: "\"away\" | \"listening\" | \"none\" | \"offline\" | \"online\" | \"typing\"",
        default: "'none'",
        description: "",
        options: [
          "away",
          "listening",
          "none",
          "offline",
          "online",
          "typing"
        ]
      },
      {
        name: "step",
        attr: "step",
        type: "number | string",
        default: "",
        description: ""
      },
      {
        name: "successPulse",
        attr: "success-pulse",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "successText",
        attr: "success-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "suffixClickable",
        attr: "suffix-clickable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "suffixColor",
        attr: "suffix-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "suffixIcon",
        attr: "suffix-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "suffixText",
        attr: "suffix-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "suggestions",
        type: "string[]",
        default: "[]",
        description: ""
      },
      {
        name: "textTransform",
        attr: "text-transform",
        type: "\"capitalize\" | \"lowercase\" | \"none\" | \"pascal\" | \"sentences\" | \"uppercase\" | \"words\"",
        default: "'none'",
        description: "",
        options: [
          "capitalize",
          "lowercase",
          "none",
          "pascal",
          "sentences",
          "uppercase",
          "words"
        ]
      },
      {
        name: "tooltip",
        attr: "tooltip",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "type",
        attr: "type",
        type: "\"color\" | \"currency\" | \"date\" | \"datetime-local\" | \"email\" | \"file\" | \"month\" | \"number\" | \"otp\" | \"password\" | \"pin\" | \"range\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\" | \"voice\" | \"week\"",
        default: "'text'",
        description: "",
        options: [
          "color",
          "currency",
          "date",
          "datetime-local",
          "email",
          "file",
          "month",
          "number",
          "otp",
          "password",
          "pin",
          "range",
          "search",
          "tel",
          "text",
          "time",
          "url",
          "voice",
          "week"
        ]
      },
      {
        name: "validationState",
        attr: "validation-state",
        type: "\"borderless\" | \"danger\" | \"default\" | \"dirty\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"typing\" | \"warning\"",
        default: "'none'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "dirty",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "typing",
          "warning"
        ]
      },
      {
        name: "validationTrigger",
        attr: "validation-trigger",
        type: "\"manual\" | \"onBlur\" | \"onInput\"",
        default: "'onInput'",
        description: "",
        options: [
          "manual",
          "onBlur",
          "onInput"
        ]
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'outlined'",
        description: "",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      },
      {
        name: "voiceEnabled",
        attr: "voice-enabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "voiceInput",
        attr: "voice-input",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "warningText",
        attr: "warning-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "",
        description: ""
      }
    ],
    events: [
      {
        name: "analyticsEvent",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "fileSelected",
        detail: "FileList",
        description: ""
      },
      {
        name: "focusInternal",
        detail: "FocusEvent",
        description: ""
      },
      {
        name: "inputBlur",
        detail: "FocusEvent",
        description: ""
      },
      {
        name: "inputChange",
        detail: "string",
        description: ""
      },
      {
        name: "inputClear",
        detail: "void",
        description: ""
      },
      {
        name: "inputCopy",
        detail: "string",
        description: ""
      },
      {
        name: "inputFocus",
        detail: "FocusEvent",
        description: ""
      },
      {
        name: "inputInput",
        detail: "string",
        description: ""
      },
      {
        name: "inputKeydown",
        detail: "KeyboardEvent",
        description: ""
      },
      {
        name: "inputKeyup",
        detail: "KeyboardEvent",
        description: ""
      },
      {
        name: "pasteInternal",
        detail: "ClipboardEvent",
        description: ""
      },
      {
        name: "prefixClick",
        detail: "void",
        description: ""
      },
      {
        name: "search",
        detail: "string",
        description: ""
      },
      {
        name: "suffixClick",
        detail: "void",
        description: ""
      },
      {
        name: "suggestionSelected",
        detail: "string",
        description: ""
      },
      {
        name: "wheelInternal",
        detail: "WheelEvent",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-input alpha-only always-floated auto-capitalize=\"none\"></ui-input>",
      stencil: "<ui-input alphaOnly={true} alwaysFloated={true} auto-capitalize=\"none\"></ui-input>",
      react: "export default function Example() {\n  return <ui-input alphaOnly alwaysFloated auto-capitalize=\"none\"></ui-input>;\n}",
      angular: "<ui-input [alphaOnly]=\"true\" [alwaysFloated]=\"true\" auto-capitalize=\"none\"></ui-input>",
      vue: "<template>\n  <UiInput :alpha-only=\"true\" :always-floated=\"true\" auto-capitalize=\"none\"></UiInput>\n</template>"
    }
  },
  {
    id: "card",
    name: "Card",
    tag: "ui-card",
    category: "Data Display",
    description: "Card web component (<ui-card>).",
    totalProps: 54,
    totalEvents: 8,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 1,
    color: "#fb7185",
    props: [
      {
        name: "actions",
        attr: "actions",
        type: "string",
        default: "''",
        description: "Quick actions (comma-separated list for bottom footer)"
      },
      {
        name: "aspectRatio",
        attr: "aspect-ratio",
        type: "string",
        default: "'16/9'",
        description: "Aspect ratio for cover image container"
      },
      {
        name: "autoScroll",
        attr: "auto-scroll",
        type: "boolean",
        default: "false",
        description: "Automatically scroll the card into view when it is expanded if it's partially off-screen"
      },
      {
        name: "avatar",
        attr: "avatar",
        type: "string",
        default: "''",
        description: "Avatar image URL"
      },
      {
        name: "avatarIcon",
        attr: "avatar-icon",
        type: "string",
        default: "''",
        description: "Avatar icon class (e.g. 'fas fa-user')"
      },
      {
        name: "bodyStyle",
        type: "{ [key: string]: string; }",
        default: "{}",
        description: "Custom body section style"
      },
      {
        name: "border",
        attr: "border",
        type: "string",
        default: "''",
        description: "Custom border string (e.g., '2px solid red')"
      },
      {
        name: "borderRadius",
        attr: "border-radius",
        type: "string",
        default: "'8px'",
        description: "Custom border radius"
      },
      {
        name: "bordered",
        attr: "bordered",
        type: "boolean",
        default: "true",
        description: "Whether to show standard border"
      },
      {
        name: "buttonText",
        attr: "button-text",
        type: "string",
        default: "''",
        description: "Primary button text in footer"
      },
      {
        name: "cardId",
        attr: "card-id",
        type: "string",
        default: "''",
        description: "Unique identifier for the card"
      },
      {
        name: "cardTitle",
        attr: "card-title",
        type: "string",
        default: "''",
        description: "Card title string"
      },
      {
        name: "clickable",
        attr: "clickable",
        type: "boolean",
        default: "false",
        description: "Make entire card clickable (if flippable is false)"
      },
      {
        name: "closable",
        attr: "closable",
        type: "boolean",
        default: "false",
        description: "Show close button in header"
      },
      {
        name: "closed",
        attr: "closed",
        type: "boolean",
        default: "false",
        description: "Controlled closed/dismissed state of the card"
      },
      {
        name: "collapsed",
        attr: "collapsed",
        type: "boolean",
        default: "false",
        description: "Initially collapsed or controlled collapsed state"
      },
      {
        name: "collapsible",
        attr: "collapsible",
        type: "boolean",
        default: "false",
        description: "Enable card expansion/collapse"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Card color theme",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "cover",
        attr: "cover",
        type: "string",
        default: "''",
        description: "Cover image URL"
      },
      {
        name: "coverAlt",
        attr: "cover-alt",
        type: "string",
        default: "'Card cover'",
        description: "Alt text for cover image"
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "''",
        description: "Description text (pattern: shortcut)"
      },
      {
        name: "displayMode",
        attr: "display-mode",
        type: "\"compact\" | \"default\" | \"expanded\" | \"stack\"",
        default: "'default'",
        description: "Card display mode",
        options: [
          "compact",
          "default",
          "expanded",
          "stack"
        ]
      },
      {
        name: "extra",
        attr: "extra",
        type: "string",
        default: "''",
        description: "Content to show in the extra section of the header"
      },
      {
        name: "flipTrigger",
        attr: "flip-trigger",
        type: "\"click\" | \"hover\"",
        default: "'click'",
        description: "Flip trigger mechanism: 'click' | 'hover'",
        options: [
          "click",
          "hover"
        ]
      },
      {
        name: "flippable",
        attr: "flippable",
        type: "boolean",
        default: "false",
        description: "Enable flip animation"
      },
      {
        name: "flipped",
        attr: "flipped",
        type: "boolean",
        default: "false",
        description: "Initially flipped or controlled flipped state"
      },
      {
        name: "glass",
        attr: "glass",
        type: "boolean",
        default: "false",
        description: "Enable glassmorphism effect (premium visual)"
      },
      {
        name: "headStyle",
        type: "{ [key: string]: string; }",
        default: "{}",
        description: "Custom head section style"
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "'auto'",
        description: "Height of the card"
      },
      {
        name: "hoverable",
        attr: "hoverable",
        type: "boolean",
        default: "false",
        description: "Enable hover elevation/shadow effect"
      },
      {
        name: "href",
        attr: "href",
        type: "string",
        default: "''",
        description: "URL to navigate to when clicked"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Icon library for menu items",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "importance",
        attr: "importance",
        type: "\"emphasized\" | \"standard\"",
        default: "'standard'",
        description: "Card importance level",
        options: [
          "emphasized",
          "standard"
        ]
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "Card layout orientation",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Show loading skeleton"
      },
      {
        name: "magnetic",
        attr: "magnetic",
        type: "boolean",
        default: "false",
        description: "Enable magnetic attraction effect"
      },
      {
        name: "menuActions",
        attr: "menu-actions",
        type: "string",
        default: "''",
        description: "Menu actions (comma-separated list, alternative to menuItems)"
      },
      {
        name: "menuItems",
        attr: "menu-items",
        type: "string",
        default: "'[]'",
        description: "Menu items (as JSON string array of CardMenuItem)"
      },
      {
        name: "pattern",
        attr: "pattern",
        type: "\"default\" | \"product\" | \"shortcut\"",
        default: "'default'",
        description: "Card pattern/style preset",
        options: [
          "default",
          "product",
          "shortcut"
        ]
      },
      {
        name: "ribbon",
        attr: "ribbon",
        type: "string",
        default: "''",
        description: "Ribbon text to display on a corner"
      },
      {
        name: "ribbonColor",
        attr: "ribbon-color",
        type: "string",
        default: "''",
        description: "Ribbon custom color"
      },
      {
        name: "ribbonPosition",
        attr: "ribbon-position",
        type: "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
        default: "'top-right'",
        description: "Ribbon position",
        options: [
          "bottom-left",
          "bottom-right",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "scrollBehavior",
        attr: "scroll-behavior",
        type: "\"auto\" | \"instant\" | \"smooth\"",
        default: "'smooth'",
        description: "Scrolling behavior when autoScroll is enabled",
        options: [
          "auto",
          "instant",
          "smooth"
        ]
      },
      {
        name: "selectable",
        attr: "selectable",
        type: "boolean",
        default: "false",
        description: "Enable selection mode"
      },
      {
        name: "selected",
        attr: "selected",
        type: "boolean",
        default: "false",
        description: "Selection state"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'default'",
        description: "Card shape",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showMenu",
        attr: "show-menu",
        type: "boolean",
        default: "false",
        description: "Show menu button (3 dots)"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'default'",
        description: "Card size",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "tag",
        attr: "tag",
        type: "string",
        default: "''",
        description: "Tag text (pattern: product/shortcut)"
      },
      {
        name: "target",
        attr: "target",
        type: "string",
        default: "''",
        description: "Link target (e.g., '_blank')"
      },
      {
        name: "tilt",
        attr: "tilt",
        type: "boolean",
        default: "false",
        description: "Enable 3D tilt effect"
      },
      {
        name: "type",
        attr: "type",
        type: "\"default\" | \"inner\"",
        default: "'default'",
        description: "Type variant: 'inner' | 'default'",
        options: [
          "default",
          "inner"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'default'",
        description: "Card variant",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "'100%'",
        description: "Width of the card"
      }
    ],
    events: [
      {
        name: "cardClick",
        detail: "void",
        description: ""
      },
      {
        name: "cardClose",
        detail: "void",
        description: ""
      },
      {
        name: "cardFlip",
        detail: "boolean",
        description: ""
      },
      {
        name: "cardSelect",
        detail: "boolean",
        description: ""
      },
      {
        name: "cardToggle",
        detail: "boolean",
        description: ""
      },
      {
        name: "expandToggle",
        detail: "{ expanded: boolean; }",
        description: ""
      },
      {
        name: "menuActionClick",
        detail: "string",
        description: "Emitted when a menu action is clicked (alias for menuItemClick matching ui-card)"
      },
      {
        name: "menuItemClick",
        detail: "CardMenuEvent",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-card auto-scroll clickable closable></ui-card>",
      stencil: "<ui-card autoScroll={true} clickable={true} closable={true}></ui-card>",
      react: "export default function Example() {\n  return <ui-card autoScroll clickable closable></ui-card>;\n}",
      angular: "<ui-card [autoScroll]=\"true\" [clickable]=\"true\" [closable]=\"true\"></ui-card>",
      vue: "<template>\n  <UiCard :auto-scroll=\"true\" :clickable=\"true\" :closable=\"true\"></UiCard>\n</template>"
    }
  },
  {
    id: "badge",
    name: "Badge",
    tag: "ui-badge",
    category: "Data Display",
    description: "Badge web component (<ui-badge>).",
    totalProps: 23,
    totalEvents: 2,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 32,
    color: "#38bdf8",
    props: [
      {
        name: "animation",
        attr: "animation",
        type: "\"bounce\" | \"expand\" | \"fade\" | \"fade-down\" | \"fade-in\" | \"fade-in-out\" | \"fade-left\" | \"fade-out\" | \"fade-right\" | \"fade-up\" | \"flip\" | \"flip-x\" | \"flip-y\" | \"float\" | \"none\" | \"pulse\" | \"ripple\" | \"rotate\" | \"scale\" | \"shake\" | \"shimmer\" | \"slide\" | \"slide-down\" | \"slide-in\" | \"slide-in-out\" | \"slide-left\" | \"slide-left-right\" | \"slide-out\" | \"slide-right\" | \"slide-up\" | \"slide-up-down\" | \"spin\" | \"spring\" | \"swing\" | \"wave\" | \"wobble\" | \"zoom\" | \"zoom-in\" | \"zoom-out\"",
        default: "'none'",
        description: "Animation type",
        options: [
          "bounce",
          "expand",
          "fade",
          "fade-down",
          "fade-in",
          "fade-in-out",
          "fade-left",
          "fade-out",
          "fade-right",
          "fade-up",
          "flip",
          "flip-x",
          "flip-y",
          "float",
          "none",
          "pulse",
          "ripple",
          "rotate",
          "scale",
          "shake",
          "shimmer",
          "slide",
          "slide-down",
          "slide-in",
          "slide-in-out",
          "slide-left",
          "slide-left-right",
          "slide-out",
          "slide-right",
          "slide-up",
          "slide-up-down",
          "spin",
          "spring",
          "swing",
          "wave",
          "wobble",
          "zoom",
          "zoom-in",
          "zoom-out"
        ]
      },
      {
        name: "closeable",
        attr: "closeable",
        type: "boolean",
        default: "false",
        description: "Add close button"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'danger'",
        description: "Color variant",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "customColor",
        attr: "custom-color",
        type: "string",
        default: "",
        description: "Custom background color"
      },
      {
        name: "customTextColor",
        attr: "custom-text-color",
        type: "string",
        default: "",
        description: "Custom text color"
      },
      {
        name: "dot",
        attr: "dot",
        type: "boolean",
        default: "false",
        description: "Show as dot instead of number"
      },
      {
        name: "glow",
        attr: "glow",
        type: "boolean",
        default: "false",
        description: "Add glow effect"
      },
      {
        name: "gradient",
        attr: "gradient",
        type: "string",
        default: "",
        description: "Gradient variant (e.g., 'blue-purple', 'green-teal', 'orange-red')"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: "Icon to display"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.)",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"left\" | \"right\"",
        default: "'left'",
        description: "Icon position",
        options: [
          "left",
          "right"
        ]
      },
      {
        name: "inline",
        attr: "inline",
        type: "boolean",
        default: "false",
        description: "Use inline positioning instead of absolute anchors"
      },
      {
        name: "interactive",
        attr: "interactive",
        type: "boolean",
        default: "false",
        description: "Make badge interactive/clickable"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "99",
        description: "Maximum value to display before showing \"+\""
      },
      {
        name: "offsetX",
        attr: "offset-x",
        type: "number",
        default: "0",
        description: "Horizontal offset from position"
      },
      {
        name: "offsetY",
        attr: "offset-y",
        type: "number",
        default: "0",
        description: "Vertical offset from position"
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
        default: "'top-right'",
        description: "Position of the badge",
        options: [
          "bottom-left",
          "bottom-right",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: RTL support"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"square\"",
        default: "'default'",
        description: "Badge shape",
        options: [
          "circle",
          "default",
          "square"
        ]
      },
      {
        name: "showZero",
        attr: "show-zero",
        type: "boolean",
        default: "false",
        description: "Whether to show badge if value is zero"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Badge size",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "value",
        attr: "value",
        type: "number | string",
        default: "",
        description: "Content/number to display in badge"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'standard'",
        description: "Variant style",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      }
    ],
    events: [
      {
        name: "badgeClick",
        detail: "void",
        description: "Fired when badge is clicked (interactive mode)"
      },
      {
        name: "badgeClose",
        detail: "void",
        description: "Fired when badge is closed"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-badge animation=\"none\" closeable color=\"danger\"></ui-badge>",
      stencil: "<ui-badge animation=\"none\" closeable={true} color=\"danger\"></ui-badge>",
      react: "export default function Example() {\n  return <ui-badge animation=\"none\" closeable color=\"danger\"></ui-badge>;\n}",
      angular: "<ui-badge animation=\"none\" [closeable]=\"true\" color=\"danger\"></ui-badge>",
      vue: "<template>\n  <UiBadge animation=\"none\" :closeable=\"true\" color=\"danger\"></UiBadge>\n</template>"
    }
  },
  {
    id: "tabs",
    name: "Tabs",
    tag: "ui-tabs",
    category: "Navigation",
    description: "Tabs web component (<ui-tabs>).",
    totalProps: 24,
    totalEvents: 8,
    variantsCount: 11,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 301,
    color: "#22d3ee",
    props: [
      {
        name: "activeColor",
        attr: "active-color",
        type: "string",
        default: "''",
        description: "Custom active/indicator color (sets --tab-active-color). Accepts any CSS color value."
      },
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "300",
        description: "Animation duration in milliseconds"
      },
      {
        name: "defaultActive",
        attr: "default-active",
        type: "string",
        default: "''",
        description: "ID of the tab that should be active by default"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconOnly",
        attr: "icon-only",
        type: "boolean",
        default: "false",
        description: "Show only icons (hide titles)"
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'left'",
        description: "Icon position: 'start', 'end', 'top', 'bottom'",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "indicatorGradient",
        attr: "indicator-gradient",
        type: "string",
        default: "''",
        description: "Optional gradient for the indicator bar. Accepts any CSS gradient string, e.g. \"linear-gradient(90deg,#ec4899,#8b5cf6)\". When set, overrides activeColor on the indicator (activeColor still affects text & active bg). Leave empty to use the solid activeColor."
      },
      {
        name: "indicatorPosition",
        attr: "indicator-position",
        type: "\"bottom\" | \"top\"",
        default: "'bottom'",
        description: "Position of the indicator for line variant: TopBottom",
        options: [
          "bottom",
          "top"
        ]
      },
      {
        name: "indicatorStyle",
        attr: "indicator-style",
        type: "\"bold\" | \"capsule\" | \"dot\" | \"glow\" | \"line\" | \"none\"",
        default: "'line'",
        description: "Selection indicator shape — applies to variants that use a sliding bar (line, minimal). - line — default 4px bar - capsule — pill-rounded fat bar - dot — centred dot - glow — soft blur glow bar - bold — extra-thick bar - none — no indicator",
        options: [
          "bold",
          "capsule",
          "dot",
          "glow",
          "line",
          "none"
        ]
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: "Enable drag-and-drop to reorder tabs"
      },
      {
        name: "items",
        attr: "items",
        type: "TabItem[] | string",
        default: "[]",
        description: "Array of tab items"
      },
      {
        name: "lazy",
        attr: "lazy",
        type: "boolean",
        default: "false",
        description: "When true, non-active tab panels are not mounted until first activated (content-based tabs only)"
      },
      {
        name: "maxTabWidth",
        attr: "max-tab-width",
        type: "number",
        default: "300",
        description: "Maximum width for tab titles (in pixels)"
      },
      {
        name: "maxTitleLength",
        attr: "max-title-length",
        type: "number",
        default: "24",
        description: "Maximum visible length for tab titles (characters). If exceeded, title is ellipsized via CSS and full text is available in tooltip."
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation of tabs: 'horizontal' or 'vertical'",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "position",
        attr: "position",
        type: "\"center\" | \"full-width\" | \"left\" | \"right\"",
        default: "'left'",
        description: "Position of tabs header: 'left', 'center', 'right', 'full-width'",
        options: [
          "center",
          "full-width",
          "left",
          "right"
        ]
      },
      {
        name: "scrollButtonPlacement",
        attr: "scroll-button-placement",
        type: "\"end\" | \"split\" | \"start\"",
        default: "'split'",
        description: "Scroll button placement: 'split' (ends), 'start' (both left/top), 'end' (both right/bottom)",
        options: [
          "end",
          "split",
          "start"
        ]
      },
      {
        name: "scrollMode",
        attr: "scroll-mode",
        type: "\"auto\" | \"manual\" | \"none\"",
        default: "'manual'",
        description: "Scroll mode: 'auto' (auto-scroll to active), 'manual' (user controls), 'none' (no scroll)",
        options: [
          "auto",
          "manual",
          "none"
        ]
      },
      {
        name: "selectionAnimation",
        attr: "selection-animation",
        type: "\"fade\" | \"none\" | \"scale\" | \"slide\"",
        default: "'slide'",
        description: "Animation on tab selection",
        options: [
          "fade",
          "none",
          "scale",
          "slide"
        ]
      },
      {
        name: "showCloseAll",
        attr: "show-close-all",
        type: "boolean",
        default: "false",
        description: "Show close all button"
      },
      {
        name: "showTabList",
        attr: "show-tab-list",
        type: "boolean",
        default: "false",
        description: "Show tab list dropdown button"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Tab size: xs | sm | md | lg | xl",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"card\" | \"elastic\" | \"enclosed\" | \"folder\" | \"glass\" | \"line\" | \"minimal\" | \"pill\" | \"sidebar\" | \"slanted\" | \"subtle\"",
        default: "'line'",
        description: "Tab variant style",
        options: [
          "card",
          "elastic",
          "enclosed",
          "folder",
          "glass",
          "line",
          "minimal",
          "pill",
          "sidebar",
          "slanted",
          "subtle"
        ]
      },
      {
        name: "wrapText",
        attr: "wrap-text",
        type: "boolean",
        default: "false",
        description: "Enable text wrapping in tabs"
      }
    ],
    events: [
      {
        name: "closeAll",
        detail: "void",
        description: ""
      },
      {
        name: "tabChange",
        detail: "TabChangeEvent",
        description: ""
      },
      {
        name: "tabClose",
        detail: "string",
        description: ""
      },
      {
        name: "tabDelete",
        detail: "string",
        description: ""
      },
      {
        name: "tabEdit",
        detail: "string",
        description: ""
      },
      {
        name: "tabOpenPanel",
        detail: "string",
        description: ""
      },
      {
        name: "tabsReordered",
        detail: "TabItem[]",
        description: ""
      },
      {
        name: "tabUpdate",
        detail: "{ id: string; title: string; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-tabs icon-library=\"default\" icon-only icon-position=\"left\"></ui-tabs>",
      stencil: "<ui-tabs icon-library=\"default\" iconOnly={true} icon-position=\"left\"></ui-tabs>",
      react: "export default function Example() {\n  return <ui-tabs icon-library=\"default\" iconOnly icon-position=\"left\"></ui-tabs>;\n}",
      angular: "<ui-tabs icon-library=\"default\" [iconOnly]=\"true\" icon-position=\"left\"></ui-tabs>",
      vue: "<template>\n  <UiTabs icon-library=\"default\" :icon-only=\"true\" icon-position=\"left\"></UiTabs>\n</template>"
    }
  },
  {
    id: "dialog-box",
    name: "Dialog Box",
    tag: "ui-dialog-box",
    category: "Feedback",
    description: "Enterprise-grade Dialog (Modal) component built for scalability and accessibility. Supports multiple types (Modal, Drawer, Fullscreen, Alert, Confirm) and framework-agnostic usage.",
    totalProps: 91,
    totalEvents: 19,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 64,
    color: "#38bdf8",
    props: [
      {
        name: "allowPopOut",
        attr: "allow-pop-out",
        type: "boolean",
        default: "false",
        description: "Show a \"pop-out\" button to open content in a separate browser window."
      },
      {
        name: "animation",
        attr: "animation",
        type: "\"fade\" | \"flip\" | \"scale\" | \"slide-down\" | \"slide-left\" | \"slide-right\" | \"slide-up\"",
        default: "'scale'",
        description: "Custom animation name.",
        options: [
          "fade",
          "flip",
          "scale",
          "slide-down",
          "slide-left",
          "slide-right",
          "slide-up"
        ]
      },
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "250",
        description: "Animation duration in ms."
      },
      {
        name: "autoClose",
        attr: "auto-close",
        type: "number",
        default: "0",
        description: "Auto-close timeout in milliseconds."
      },
      {
        name: "autoSubmitOnTimeout",
        attr: "auto-submit-on-timeout",
        type: "boolean",
        default: "false",
        description: "Whether to automatically submit 'session' dialog on timeout. If false, it will just close (cancel)."
      },
      {
        name: "avatar",
        attr: "avatar",
        type: "string",
        default: "''",
        description: "User avatar URL to show in the header"
      },
      {
        name: "backdrop",
        attr: "backdrop",
        type: "\"default\" | \"none\" | \"static\"",
        default: "'default'",
        description: "Backdrop Behavior. 'default' (closes on click), 'static' (no close), 'none' (no backdrop).",
        options: [
          "default",
          "none",
          "static"
        ]
      },
      {
        name: "backgroundColor",
        attr: "background-color",
        type: "string",
        default: "'white'",
        description: "Background color of the dialog panel"
      },
      {
        name: "beforeClose",
        type: "() => boolean | Promise<boolean>",
        default: "",
        description: "Optional callback function to execute before closing. Return false or a Promise resolving to false to prevent closing."
      },
      {
        name: "bordered",
        attr: "bordered",
        type: "boolean",
        default: "false",
        description: "Whether the dialog should have a more pronounced border."
      },
      {
        name: "buttonSet",
        attr: "button-set",
        type: "\"custom\" | \"ok-cancel\" | \"retry-cancel\" | \"save-discard\" | \"yes-no\" | \"yes-no-cancel\"",
        default: "'custom'",
        description: "Preset button set for confirmation dialogs. - `'ok-cancel'` → OK / Cancel - `'yes-no'` → Yes / No - `'yes-no-cancel'` → Yes / No / Cancel (No maps to resetText slot, left-aligned) - `'save-discard'` → Save / Discard - `'retry-cancel'` → Retry / Cancel Explicit `okText` / `cancelText` / `resetText` props always override the preset labels.",
        options: [
          "custom",
          "ok-cancel",
          "retry-cancel",
          "save-discard",
          "yes-no",
          "yes-no-cancel"
        ]
      },
      {
        name: "cancelDisabled",
        attr: "cancel-disabled",
        type: "boolean",
        default: "false",
        description: "Disable the Cancel button."
      },
      {
        name: "cancelText",
        attr: "cancel-text",
        type: "string",
        default: "",
        description: "Text for the Cancel button."
      },
      {
        name: "closeOnBackdrop",
        attr: "close-on-backdrop",
        type: "boolean",
        default: "true",
        description: "Whether clicking the backdrop closes the dialog."
      },
      {
        name: "closeOnEsc",
        attr: "close-on-esc",
        type: "boolean",
        default: "true",
        description: "Whether the ESC key closes the dialog."
      },
      {
        name: "confetti",
        attr: "confetti",
        type: "boolean",
        default: "false",
        description: "Fire confetti when the dialog opens."
      },
      {
        name: "confirmationText",
        attr: "confirmation-text",
        type: "string",
        default: "''",
        description: "Confirmation text for checkbox (e.g. \"I accept the Terms & Conditions\"). If provided, the OK button will be disabled until checked."
      },
      {
        name: "currentStep",
        attr: "current-step",
        type: "number",
        default: "1",
        description: "Current step in Wizard mode (1-indexed)."
      },
      {
        name: "debug",
        attr: "debug",
        type: "boolean",
        default: "false",
        description: "Enable debug mode (shows layout boundaries and metadata)."
      },
      {
        name: "density",
        attr: "density",
        type: "\"comfortable\" | \"compact\" | \"cozy\" | \"normal\"",
        default: "'cozy'",
        description: "Visual density mode.",
        options: [
          "comfortable",
          "compact",
          "cozy",
          "normal"
        ]
      },
      {
        name: "dialogTitle",
        attr: "dialog-title",
        type: "string",
        default: "''",
        description: "Dialog title"
      },
      {
        name: "dirty",
        attr: "dirty",
        type: "boolean",
        default: "false",
        description: "Whether the dialog contents are \"dirty\" (unsaved changes). Triggers the confirmation prompt on close."
      },
      {
        name: "dockLabel",
        attr: "dock-label",
        type: "string",
        default: "''",
        description: "Label for the dock when minimized."
      },
      {
        name: "fullscreenOnMobile",
        attr: "fullscreen-on-mobile",
        type: "boolean",
        default: "true",
        description: "Fullscreen on mobile devices automatically."
      },
      {
        name: "glass",
        attr: "glass",
        type: "boolean",
        default: "false",
        description: "Enable glassmorphism effect (blur) on backdrop."
      },
      {
        name: "globalBlur",
        attr: "global-blur",
        type: "boolean",
        default: "false",
        description: "Whether to blur the entire webpage behind this dialog."
      },
      {
        name: "haptics",
        attr: "haptics",
        type: "boolean",
        default: "false",
        description: "Enable haptic feedback for mobile devices."
      },
      {
        name: "headerColor",
        attr: "header-color",
        type: "string",
        default: "",
        description: "Header background color override."
      },
      {
        name: "headerImage",
        attr: "header-image",
        type: "string",
        default: "",
        description: "Path to header image"
      },
      {
        name: "headerSize",
        attr: "header-size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Header size.",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "'auto'",
        description: "Dialog height"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: "Icon name to show in the header"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Library to use for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'left'",
        description: "Position of the icon/avatar relative to the title",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "initialFocus",
        attr: "initial-focus",
        type: "string",
        default: "",
        description: "CSS selector for the element to focus initially when opened."
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: "Draggable dialog (only for 'modal' type)."
      },
      {
        name: "isNested",
        attr: "is-nested",
        type: "boolean",
        default: "false",
        description: "Whether the dialog is nested (inside another dialog). Triggers visual differentiation (smer size, deeper shadow)."
      },
      {
        name: "keepMounted",
        attr: "keep-mounted",
        type: "boolean",
        default: "false",
        description: "Keep content mounted when closed."
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"default\" | \"side-nav\"",
        default: "'default'",
        description: "Dialog layout mode. 'default': Standard dialog 'side-nav': Includes a sidebar for master/detail views",
        options: [
          "default",
          "side-nav"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Skeleton loading state. Transforms the dialog UI into placeholders."
      },
      {
        name: "maxHeight",
        attr: "max-height",
        type: "string",
        default: "",
        description: "Maximum Height"
      },
      {
        name: "maxWidth",
        attr: "max-width",
        type: "string",
        default: "",
        description: "Maximum Width"
      },
      {
        name: "maximized",
        attr: "maximized",
        type: "boolean",
        default: "false",
        description: "Whether the dialog is maximized"
      },
      {
        name: "menuIcon",
        attr: "menu-icon",
        type: "string",
        default: "'more-horizontal'",
        description: "Icon for the menu trigger button in the header. Defaults to 'more-horizontal' (⋯). Use 'settings' for a gear, 'sliders-horizontal' for filters, etc."
      },
      {
        name: "menuItems",
        attr: "menu-items",
        type: "any[] | string",
        default: "[]",
        description: "Menu items for the built-in context menu. Can be a JSON string or an array of objects. If provided, clicking the menu button automatically opens a context menu."
      },
      {
        name: "menuTitle",
        attr: "menu-title",
        type: "string",
        default: "'Menu'",
        description: "Tooltip text for the menu trigger button."
      },
      {
        name: "minHeight",
        attr: "min-height",
        type: "string",
        default: "",
        description: "Minimum Height"
      },
      {
        name: "minWidth",
        attr: "min-width",
        type: "string",
        default: "",
        description: "Minimum Width"
      },
      {
        name: "minimized",
        attr: "minimized",
        type: "boolean",
        default: "false",
        description: "Whether the dialog is minimized"
      },
      {
        name: "okDisabled",
        attr: "ok-disabled",
        type: "boolean",
        default: "false",
        description: "Disable the OK button."
      },
      {
        name: "okLoading",
        attr: "ok-loading",
        type: "boolean",
        default: "false",
        description: "Loading state for the OK button."
      },
      {
        name: "okText",
        attr: "ok-text",
        type: "string",
        default: "",
        description: "Text for the OK button. If provided, renders an OK button in the footer."
      },
      {
        name: "open",
        attr: "open",
        type: "boolean",
        default: "false",
        description: "Whether the dialog is open"
      },
      {
        name: "permissions",
        type: "string[]",
        default: "[]",
        description: "Required permissions to view this dialog."
      },
      {
        name: "portal",
        attr: "portal",
        type: "boolean",
        default: "false",
        description: "Whether to portal the dialog to body"
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom\" | \"bottom-left\" | \"bottom-right\" | \"center\" | \"left\" | \"right\" | \"top\" | \"top-left\" | \"top-right\"",
        default: "'center'",
        description: "Position of the dialog. For 'drawer' type, these determine the slide direction.",
        options: [
          "bottom",
          "bottom-left",
          "bottom-right",
          "center",
          "left",
          "right",
          "top",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "progress",
        attr: "progress",
        type: "number",
        default: "-1",
        description: "Visual progress bar percentage (0-100)."
      },
      {
        name: "promptInitialValue",
        attr: "prompt-initial-value",
        type: "string",
        default: "''",
        description: "Initial value for the prompt input."
      },
      {
        name: "promptLabel",
        attr: "prompt-label",
        type: "string",
        default: "''",
        description: "Label for the input field (only for 'prompt' type)."
      },
      {
        name: "promptPlaceholder",
        attr: "prompt-placeholder",
        type: "string",
        default: "''",
        description: "Placeholder text for the prompt input."
      },
      {
        name: "promptType",
        attr: "prompt-type",
        type: "\"email\" | \"number\" | \"password\" | \"tel\" | \"text\"",
        default: "'text'",
        description: "Input type for the prompt (text, password, etc.).",
        options: [
          "email",
          "number",
          "password",
          "tel",
          "text"
        ]
      },
      {
        name: "remember",
        attr: "remember",
        type: "boolean",
        default: "false",
        description: "Remember dialog position and size between sessions (requires id)."
      },
      {
        name: "resetText",
        attr: "reset-text",
        type: "string",
        default: "",
        description: "Text for the Reset button (left-aligned)."
      },
      {
        name: "resizable",
        attr: "resizable",
        type: "boolean",
        default: "false",
        description: "Resizable dialog."
      },
      {
        name: "returnFocus",
        attr: "return-focus",
        type: "boolean",
        default: "true",
        description: "Return focus to trigger element on close."
      },
      {
        name: "scrollArea",
        attr: "scroll-area",
        type: "\"body\" | \"paper\"",
        default: "'paper'",
        description: "Scroll behavior. 'paper' (scroll inside content), 'body' (scroll whole dialog).",
        options: [
          "body",
          "paper"
        ]
      },
      {
        name: "sensitive",
        attr: "sensitive",
        type: "boolean",
        default: "false",
        description: "Whether the primary action is sensitive (requires double-confirmation)."
      },
      {
        name: "sessionTimeout",
        attr: "session-timeout",
        type: "number",
        default: "60",
        description: "Session timeout duration in seconds (only for 'session' type)."
      },
      {
        name: "shortcuts",
        attr: "shortcuts",
        type: "boolean",
        default: "true",
        description: "Enable OS-level shortcuts (Ctrl+Enter to OK, Esc to Close)."
      },
      {
        name: "showClose",
        attr: "show-close",
        type: "boolean",
        default: "true",
        description: "Whether to show close button"
      },
      {
        name: "showFooter",
        attr: "show-footer",
        type: "boolean",
        default: "true",
        description: "Whether to show the footer"
      },
      {
        name: "showHeader",
        attr: "show-header",
        type: "boolean",
        default: "true",
        description: "Whether to show the header"
      },
      {
        name: "showMaximize",
        attr: "show-maximize",
        type: "boolean",
        default: "false",
        description: "Whether to show maximize button"
      },
      {
        name: "showMenu",
        attr: "show-menu",
        type: "boolean",
        default: "false",
        description: "Whether to show menu button (Action Menu)"
      },
      {
        name: "showMinimize",
        attr: "show-minimize",
        type: "boolean",
        default: "false",
        description: "Whether to show minimize button"
      },
      {
        name: "showStatusBar",
        attr: "show-status-bar",
        type: "boolean",
        default: "false",
        description: "Whether to show a status bar above the footer"
      },
      {
        name: "showToolbar",
        attr: "show-toolbar",
        type: "boolean",
        default: "false",
        description: "Whether to show a toolbar below the header"
      },
      {
        name: "size",
        attr: "size",
        type: "\"custom\" | \"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Predefined horizontal sizing.",
        options: [
          "custom",
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "snapToEdges",
        attr: "snap-to-edges",
        type: "boolean",
        default: "true",
        description: "Snap to screen edges when dragging"
      },
      {
        name: "sound",
        attr: "sound",
        type: "boolean",
        default: "false",
        description: "Enable subtle sound feedback for interactions."
      },
      {
        name: "starred",
        attr: "starred",
        type: "boolean",
        default: "false",
        description: "Whether the dialog is starred/favorited"
      },
      {
        name: "status",
        attr: "status",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Dialog status/type",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "steps",
        attr: "steps",
        type: "number | string[]",
        default: "0",
        description: "Stepper steps for Wizard mode. Either an array of strings or a number."
      },
      {
        name: "subtitle",
        attr: "subtitle",
        type: "string",
        default: "''",
        description: "Dialog subtitle"
      },
      {
        name: "swipeToClose",
        attr: "swipe-to-close",
        type: "boolean",
        default: "false",
        description: "Allow swipe-to-close gesture on mobile devices."
      },
      {
        name: "timeout",
        attr: "timeout",
        type: "number",
        default: "0",
        description: "Alias for autoClose."
      },
      {
        name: "titleTag",
        attr: "title-tag",
        type: "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
        default: "'h3'",
        description: "Semantic tag for the title (h1-h6)",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6"
        ]
      },
      {
        name: "type",
        attr: "type",
        type: "\"alert\" | \"confirm\" | \"default\" | \"delete\" | \"drawer\" | \"fullscreen\" | \"messagebox\" | \"modal\" | \"pre-session\" | \"prompt\" | \"session\" | \"terms\" | \"upload\"",
        default: "'modal'",
        description: "Dialog functional type. - 'modal': Standard centered modal. - 'drawer': Slides from an edge (determined by position). - 'fullscreen': Occupies entire screen. - 'alert': Emphasis on the message, simple actions. - 'confirm': Standard confirmation with OK/Cancel flow. - 'prompt': Modal with an input field for user entry. - 'messagebox': Simplified modal for informational messages. - (Legacy): 'default' | 'delete' | 'upload' | 'session' | 'terms'",
        options: [
          "alert",
          "confirm",
          "default",
          "delete",
          "drawer",
          "fullscreen",
          "messagebox",
          "modal",
          "pre-session",
          "prompt",
          "session",
          "terms",
          "upload"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'outlined'",
        description: "Dialog variant style",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "'500px'",
        description: "Dialog width. Explicit width takes precedence over size if size is 'custom'."
      },
      {
        name: "zIndex",
        attr: "z-index",
        type: "number",
        default: "10000",
        description: "Z-Index for the dialog. Useful for nested dialogs."
      }
    ],
    events: [
      {
        name: "afterClose",
        detail: "void",
        description: "Emitted when closing animation finishes."
      },
      {
        name: "afterOpen",
        detail: "void",
        description: "Emitted when opening animation finishes."
      },
      {
        name: "auditLog",
        detail: "{ action: string; timestamp: number; metadata?: any; }",
        description: "Event emitted for security audit logging."
      },
      {
        name: "beforeCloseEvent",
        detail: "{ source: \"backdrop\" | \"esc\" | \"close-btn\" | \"programmatic\"; }",
        description: "Emitted before the dialog closes. Can be cancelled by event.preventDefault()."
      },
      {
        name: "beforeOpen",
        detail: "void",
        description: "Emitted before the dialog opens. Can be cancelled via event.preventDefault()."
      },
      {
        name: "cancel",
        detail: "any",
        description: "Event emitted when Cancel button is clicked"
      },
      {
        name: "closeStarted",
        detail: "void",
        description: "Emitted when closing animation starts."
      },
      {
        name: "dialogClosed",
        detail: "any",
        description: "Event emitted when dialog is closed"
      },
      {
        name: "dialogMaximized",
        detail: "{ maximized: boolean; }",
        description: "Event emitted when dialog is maximized"
      },
      {
        name: "dialogMinimized",
        detail: "{ minimized: boolean; }",
        description: "Event emitted when dialog is minimized"
      },
      {
        name: "dialogOpened",
        detail: "any",
        description: "Event emitted when the dialog is opened."
      },
      {
        name: "dialogReset",
        detail: "any",
        description: "Event emitted when Reset button is clicked"
      },
      {
        name: "menu",
        detail: "any",
        description: "Event emitted when menu button is clicked"
      },
      {
        name: "menuAction",
        detail: "any",
        description: "Event emitted when a menu item is clicked (if using built-in menuItems)"
      },
      {
        name: "ok",
        detail: "any",
        description: "Event emitted when OK button is clicked"
      },
      {
        name: "openStarted",
        detail: "void",
        description: "Emitted when opening animation starts."
      },
      {
        name: "redo",
        detail: "any",
        description: "Event emitted for redo action"
      },
      {
        name: "toastRequest",
        detail: "{ message: string; type: \"info\" | \"error\" | \"success\"; }",
        description: "Event emitted to request a toast notification."
      },
      {
        name: "undo",
        detail: "any",
        description: "Event emitted for undo action"
      }
    ],
    slots: [
      {
        name: "actions",
        description: "Custom actions in the bottom-right of the footer"
      },
      {
        name: "body",
        description: "Main content of the dialog"
      },
      {
        name: "footer",
        description: "Replaces the default footer content"
      },
      {
        name: "header",
        description: "Replaces the default header content"
      },
      {
        name: "subtitle",
        description: "Replaces the subtitle in the header"
      },
      {
        name: "title",
        description: "Replaces the title in the header"
      }
    ],
    usageCode: {
      html: "<ui-dialog-box allow-pop-out animation=\"scale\" auto-submit-on-timeout>\n  Content\n</ui-dialog-box>",
      stencil: "<ui-dialog-box allowPopOut={true} animation=\"scale\" autoSubmitOnTimeout={true}>\n  Content\n</ui-dialog-box>",
      react: "export default function Example() {\n  return <ui-dialog-box allowPopOut animation=\"scale\" autoSubmitOnTimeout>\n  Content\n</ui-dialog-box>;\n}",
      angular: "<ui-dialog-box [allowPopOut]=\"true\" animation=\"scale\" [autoSubmitOnTimeout]=\"true\">\n  Content\n</ui-dialog-box>",
      vue: "<template>\n  <UiDialogBox :allow-pop-out=\"true\" animation=\"scale\" :auto-submit-on-timeout=\"true\">\n  Content\n</UiDialogBox>\n</template>"
    }
  },
  {
    id: "dropdown",
    name: "Dropdown",
    tag: "ui-dropdown",
    category: "Forms",
    description: "Dropdown web component (<ui-dropdown>).",
    totalProps: 41,
    totalEvents: 3,
    variantsCount: 5,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 80,
    color: "#38bdf8",
    props: [
      {
        name: "appearance",
        attr: "appearance",
        type: "\"button\" | \"dropdown\"",
        default: "'dropdown'",
        description: "Appearance: default dropdown or button-like (no arrow)",
        options: [
          "button",
          "dropdown"
        ]
      },
      {
        name: "cascading",
        attr: "cascading",
        type: "boolean",
        default: "false",
        description: "Enable cascading/hierarchical selection"
      },
      {
        name: "caseSensitive",
        attr: "case-sensitive",
        type: "boolean",
        default: "false",
        description: "If true, search filtering is case-sensitive"
      },
      {
        name: "chipView",
        attr: "chip-view",
        type: "boolean",
        default: "false",
        description: "Use chips for multi-select display"
      },
      {
        name: "clearable",
        attr: "clearable",
        type: "boolean",
        default: "",
        description: "Show clear (✕) button when a value is selected. - When not set (default): automatically shown for multi-select, hidden for single-select. - Set to `true` : always show the clear button (both single & multi). - Set to `false` : always hide the clear button (both single & multi)."
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "errorMessage",
        attr: "error-message",
        type: "string",
        default: "",
        description: "Error message to show when invalid"
      },
      {
        name: "expandAll",
        attr: "expand-all",
        type: "boolean",
        default: "false",
        description: "If true, all nodes in a cascading dropdown will be expanded by default."
      },
      {
        name: "fitContent",
        attr: "fit-content",
        type: "boolean",
        default: "false",
        description: "If true, the dropdown width fits its longest option (max-content)."
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: "If true, the dropdown will take up the full width of its container."
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "",
        description: "Helper text / validation message"
      },
      {
        name: "highFidelity",
        attr: "high-fidelity",
        type: "boolean",
        default: "true",
        description: "Use high-fidelity animation (Framer-like physics)"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "string",
        default: "'ionicons'",
        description: "Default icon library for option icons (e.g. 'lucide', 'ionicons')"
      },
      {
        name: "ignoreParentPosition",
        attr: "ignore-parent-position",
        type: "boolean",
        default: "true",
        description: "If true, dropdown positioning ignores transformed/positioned parent offsets. Use this when the menu is portaled and should stay anchored to viewport coordinates."
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: "Validation state"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label text shown above the dropdown"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "maxHeight",
        attr: "max-height",
        type: "number",
        default: "300",
        description: "Maximum height of dropdown (in pixels)"
      },
      {
        name: "menuWidth",
        attr: "menu-width",
        type: "number | string",
        default: "",
        description: "Optional width for the dropdown options panel. Accepts a number (pixels) or any valid CSS width value such as `320px`, `24rem`, or `min(28rem, 90vw)`. By default, the menu matches the trigger width."
      },
      {
        name: "multiSelect",
        attr: "multi-select",
        type: "boolean",
        default: "false",
        description: "Enable multi-select mode"
      },
      {
        name: "options",
        attr: "options",
        type: "DropdownOption[] | string",
        default: "[]",
        description: "Options as JSON string or DropdownOption array"
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "'Select an option'",
        description: "Placeholder text"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search...'",
        description: "Placeholder for the search input"
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "false",
        description: "Show search/filter input"
      },
      {
        name: "selectAllLabel",
        attr: "select-all-label",
        type: "string",
        default: "'Select All'",
        description: "Label for the Select All option"
      },
      {
        name: "selectedMarkerColor",
        attr: "selected-marker-color",
        type: "string",
        default: "''",
        description: "Color for the selection marker icon. Defaults to the selected state color token."
      },
      {
        name: "selectedMarkerIcon",
        attr: "selected-marker-icon",
        type: "string",
        default: "'check'",
        description: "Custom icon for the selection marker"
      },
      {
        name: "selectedMarkerLabel",
        attr: "selected-marker-label",
        type: "string",
        default: "''",
        description: "Optional label text shown after the checkmark on the selected item."
      },
      {
        name: "selectedMarkerLibrary",
        attr: "selected-marker-library",
        type: "string",
        default: "'lucide'",
        description: "Icon library for the selection marker icon"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'default'",
        description: "Shape variant (inherits from design system or parent)",
        options: [
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showArrow",
        attr: "show-arrow",
        type: "boolean",
        default: "true",
        description: "Controls visibility of the arrow icon. If false, no arrow is shown. Defaults to true for dropdown appearance; false when appearance is 'button'."
      },
      {
        name: "showPath",
        attr: "show-path",
        type: "boolean",
        default: "false",
        description: "If true, show the full hierarchy path in selected value (for cascading)"
      },
      {
        name: "showSelectAll",
        attr: "show-select-all",
        type: "boolean",
        default: "false",
        description: "If true, shows a \"Select All\" option in multi-select mode"
      },
      {
        name: "showSelectedMarker",
        attr: "show-selected-marker",
        type: "boolean",
        default: "true",
        description: "If true, shows a checkmark (tick) next to the selected item in single-select mode."
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size variant",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "If true, shows a skeleton loading state for the trigger"
      },
      {
        name: "textColor",
        attr: "text-color",
        type: "string",
        default: "''",
        description: "Custom text color for the dropdown display"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: "Selected value(s) - string for single, comma-separated for multi"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"detailed\" | \"glass\" | \"nested-menu\" | \"toggle\"",
        default: "'default'",
        description: "Aesthetic variant",
        options: [
          "default",
          "detailed",
          "glass",
          "nested-menu",
          "toggle"
        ]
      },
      {
        name: "virtualScroll",
        attr: "virtual-scroll",
        type: "boolean",
        default: "false",
        description: "If true, enables virtual scrolling (renders only a subset of items for performance)"
      }
    ],
    events: [
      {
        name: "dropdownClose",
        detail: "void",
        description: "Emitted when dropdown closes"
      },
      {
        name: "dropdownOpen",
        detail: "void",
        description: "Emitted when dropdown opens"
      },
      {
        name: "valueChange",
        detail: "DropdownChangeEvent",
        description: "Emitted when value changes"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-dropdown appearance=\"dropdown\" cascading case-sensitive></ui-dropdown>",
      stencil: "<ui-dropdown appearance=\"dropdown\" cascading={true} caseSensitive={true}></ui-dropdown>",
      react: "export default function Example() {\n  return <ui-dropdown appearance=\"dropdown\" cascading caseSensitive></ui-dropdown>;\n}",
      angular: "<ui-dropdown appearance=\"dropdown\" [cascading]=\"true\" [caseSensitive]=\"true\"></ui-dropdown>",
      vue: "<template>\n  <UiDropdown appearance=\"dropdown\" :cascading=\"true\" :case-sensitive=\"true\"></UiDropdown>\n</template>"
    }
  },
  {
    id: "checkbox",
    name: "Checkbox",
    tag: "ui-checkbox",
    category: "Forms",
    description: "Checkbox web component (<ui-checkbox>).",
    totalProps: 40,
    totalEvents: 4,
    variantsCount: 8,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 95,
    color: "#818cf8",
    props: [
      {
        name: "ariaDescribedBy",
        attr: "aria-described-by",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "ariaLabel",
        attr: "aria-label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "checkboxTabIndex",
        attr: "checkbox-tab-index",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "checked",
        attr: "checked",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "confetti",
        attr: "confetti",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Trigger confetti burst on check"
      },
      {
        name: "customCheckIcon",
        attr: "custom-check-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "customClass",
        attr: "custom-class",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "customIconLibrary",
        attr: "custom-icon-library",
        type: "string",
        default: "'lucide'",
        description: "High-Fidelity: Library for custom icons"
      },
      {
        name: "customImage",
        attr: "custom-image",
        type: "string",
        default: "''",
        description: "High-Fidelity: Custom Image instead of check"
      },
      {
        name: "customIndeterminateIcon",
        attr: "custom-indeterminate-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "''",
        description: "High-Fidelity: Secondary description text"
      },
      {
        name: "descriptionPosition",
        attr: "description-position",
        type: "\"below\" | \"right\"",
        default: "'below'",
        description: "Position of the descriptive text relative to the label",
        options: [
          "below",
          "right"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "enableAnimation",
        attr: "enable-animation",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "errorMessage",
        attr: "error-message",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "glow",
        attr: "glow",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Glow effect when checked"
      },
      {
        name: "haptic",
        attr: "haptic",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Enable haptic feedback"
      },
      {
        name: "hapticIntensity",
        attr: "haptic-intensity",
        type: "\"heavy\" | \"light\" | \"md\"",
        default: "'light'",
        description: "High-Fidelity: Haptic intensity",
        options: [
          "heavy",
          "light",
          "md"
        ]
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "indeterminate",
        attr: "indeterminate",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "isButton",
        attr: "is-button",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "labelClickable",
        attr: "label-clickable",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'right'",
        description: "",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "reveal",
        attr: "reveal",
        type: "\"fade-in\" | \"none\" | \"slide-up\" | \"zoom\"",
        default: "'none'",
        description: "Entry animation when mounting",
        options: [
          "fade-in",
          "none",
          "slide-up",
          "zoom"
        ]
      },
      {
        name: "revealDelay",
        attr: "reveal-delay",
        type: "number",
        default: "0",
        description: "Delay for entry animation (ms)"
      },
      {
        name: "rippleEffect",
        attr: "ripple-effect",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "tooltip",
        attr: "tooltip",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "tooltipPosition",
        attr: "tooltip-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'top'",
        description: "",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"button\" | \"chip\" | \"default\" | \"filled\" | \"round-color\" | \"rounded\" | \"square\" | \"tick\"",
        default: "'default'",
        description: "",
        options: [
          "button",
          "chip",
          "default",
          "filled",
          "round-color",
          "rounded",
          "square",
          "tick"
        ]
      }
    ],
    events: [
      {
        name: "analyticsEvent",
        detail: "{ checked: boolean; value: string; indeterminate: boolean; }",
        description: ""
      },
      {
        name: "checkboxBlur",
        detail: "void",
        description: ""
      },
      {
        name: "checkboxChange",
        detail: "{ checked: boolean; value: string; indeterminate: boolean; }",
        description: ""
      },
      {
        name: "checkboxFocus",
        detail: "void",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-checkbox checked color=\"primary\" confetti></ui-checkbox>",
      stencil: "<ui-checkbox checked={true} color=\"primary\" confetti={true}></ui-checkbox>",
      react: "export default function Example() {\n  return <ui-checkbox checked color=\"primary\" confetti></ui-checkbox>;\n}",
      angular: "<ui-checkbox [checked]=\"true\" color=\"primary\" [confetti]=\"true\"></ui-checkbox>",
      vue: "<template>\n  <UiCheckbox :checked=\"true\" color=\"primary\" :confetti=\"true\"></UiCheckbox>\n</template>"
    }
  },
  {
    id: "switch",
    name: "Switch",
    tag: "ui-switch",
    category: "Forms",
    description: "Switch web component (<ui-switch>).",
    totalProps: 50,
    totalEvents: 5,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 254,
    color: "#a855f7",
    props: [
      {
        name: "ariaLabel",
        attr: "aria-label",
        type: "string",
        default: "''",
        description: "Aria label override"
      },
      {
        name: "async",
        attr: "async",
        type: "boolean",
        default: "false",
        description: "Enable async toggle mode (waits for external confirmation)"
      },
      {
        name: "autoSubmit",
        attr: "auto-submit",
        type: "boolean",
        default: "false",
        description: "Auto-submit nearest form on change"
      },
      {
        name: "checked",
        attr: "checked",
        type: "boolean",
        default: "false",
        description: "Checked state"
      },
      {
        name: "checkedImage",
        attr: "checked-image",
        type: "string",
        default: "",
        description: "High-Fidelity: Image URL for checked state"
      },
      {
        name: "checkedText",
        attr: "checked-text",
        type: "string",
        default: "''",
        description: "Custom text on track when checked"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "Semantic color variant",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "confirmationMessage",
        attr: "confirmation-message",
        type: "string",
        default: "'Are you sure you want to change this?'",
        description: "Confirmation message"
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "",
        description: "Tactical side/bottom description"
      },
      {
        name: "descriptionPosition",
        attr: "description-position",
        type: "\"bottom\" | \"side\"",
        default: "'bottom'",
        description: "",
        options: [
          "bottom",
          "side"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "elevation",
        attr: "elevation",
        type: "number",
        default: "0",
        description: "Elevation level (0-5)"
      },
      {
        name: "enableAnimation",
        attr: "enable-animation",
        type: "boolean",
        default: "true",
        description: "Performance/Animation toggle"
      },
      {
        name: "errorMessage",
        attr: "error-message",
        type: "string",
        default: "''",
        description: "Error message when invalid"
      },
      {
        name: "formId",
        attr: "form-id",
        type: "string",
        default: "''",
        description: "Associated form ID"
      },
      {
        name: "glow",
        attr: "glow",
        type: "boolean",
        default: "false",
        description: "Glow effect when active"
      },
      {
        name: "gradient",
        attr: "gradient",
        type: "boolean",
        default: "false",
        description: "Use gradient colors"
      },
      {
        name: "gradientColors",
        attr: "gradient-colors",
        type: "string",
        default: "''",
        description: "Gradient colors (JSON array of strings)"
      },
      {
        name: "haptic",
        attr: "haptic",
        type: "boolean",
        default: "false",
        description: "Sensory vibration feedback"
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: "Helper text below switch"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'ionicons'",
        description: "Icon library to use",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconOff",
        attr: "icon-off",
        type: "string",
        default: "",
        description: "Icon when unchecked"
      },
      {
        name: "iconOn",
        attr: "icon-on",
        type: "string",
        default: "",
        description: "Icon when checked"
      },
      {
        name: "indeterminate",
        attr: "indeterminate",
        type: "boolean",
        default: "false",
        description: "Indeterminate state"
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: "Invalid state"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label for the switch"
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"left\" | \"right\"",
        default: "'right'",
        description: "Label position",
        options: [
          "left",
          "right"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state (shows spinner)"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "''",
        description: "Form field name"
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "physics",
        attr: "physics",
        type: "\"bouncy\" | \"linear\" | \"liquid\" | \"stiff\"",
        default: "'liquid'",
        description: "Animation physics preset",
        options: [
          "bouncy",
          "linear",
          "liquid",
          "stiff"
        ]
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: "Readonly state"
      },
      {
        name: "requireConfirmation",
        attr: "require-confirmation",
        type: "boolean",
        default: "false",
        description: "Require confirmation before toggle"
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: "Required field indicator"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'default'",
        description: "Shape style",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showDefaultIcons",
        attr: "show-default-icons",
        type: "boolean",
        default: "false",
        description: "Show check/cross icons by default"
      },
      {
        name: "showIcons",
        attr: "show-icons",
        type: "boolean",
        default: "false",
        description: "Show icons"
      },
      {
        name: "showSuccessFeedback",
        attr: "show-success-feedback",
        type: "boolean",
        default: "false",
        description: "Show success feedback after change"
      },
      {
        name: "showTooltip",
        attr: "show-tooltip",
        type: "boolean",
        default: "false",
        description: "Show tooltip on hover"
      },
      {
        name: "showTrackText",
        attr: "show-track-text",
        type: "boolean",
        default: "false",
        description: "Show text symbols on track"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Size variant",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "switchTabIndex",
        attr: "switch-tab-index",
        type: "number",
        default: "0",
        description: "Tab index"
      },
      {
        name: "thumbShape",
        attr: "thumb-shape",
        type: "\"circle\" | \"square\"",
        default: "'circle'",
        description: "Shape of the thumb",
        options: [
          "circle",
          "square"
        ]
      },
      {
        name: "tooltipText",
        attr: "tooltip-text",
        type: "string",
        default: "''",
        description: "Tooltip text"
      },
      {
        name: "uncheckedImage",
        attr: "unchecked-image",
        type: "string",
        default: "",
        description: "High-Fidelity: Image URL for unchecked state"
      },
      {
        name: "uncheckedText",
        attr: "unchecked-text",
        type: "string",
        default: "''",
        description: "Custom text on track when unchecked"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "'on'",
        description: "Form field value"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'solid'",
        description: "Material archetype variant",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "",
        description: "Custom width for the switch track (e.g., '100px', 'auto')"
      }
    ],
    events: [
      {
        name: "switchBlur",
        detail: "void",
        description: "Blur event"
      },
      {
        name: "switchChange",
        detail: "{ checked: boolean; value?: string; }",
        description: "Change event"
      },
      {
        name: "switchConfirm",
        detail: "{ confirmed: boolean; value: boolean; }",
        description: "Confirmation event"
      },
      {
        name: "switchFocus",
        detail: "void",
        description: "Focus event"
      },
      {
        name: "switchSuccess",
        detail: "void",
        description: "Success feedback event"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-switch async auto-submit checked></ui-switch>",
      stencil: "<ui-switch async={true} autoSubmit={true} checked={true}></ui-switch>",
      react: "export default function Example() {\n  return <ui-switch async autoSubmit checked></ui-switch>;\n}",
      angular: "<ui-switch [async]=\"true\" [autoSubmit]=\"true\" [checked]=\"true\"></ui-switch>",
      vue: "<template>\n  <UiSwitch :async=\"true\" :auto-submit=\"true\" :checked=\"true\"></UiSwitch>\n</template>"
    }
  },
  {
    id: "avatar",
    name: "Avatar",
    tag: "ui-avatar",
    category: "Data Display",
    description: "Avatar web component (<ui-avatar>).",
    totalProps: 59,
    totalEvents: 6,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 298,
    color: "#fbbf24",
    props: [
      {
        name: "acceptTypes",
        attr: "accept-types",
        type: "string",
        default: "'image/*'",
        description: "Accept file types for upload"
      },
      {
        name: "activeSpeaker",
        attr: "active-speaker",
        type: "boolean",
        default: "false",
        description: "Active speaker visualizer"
      },
      {
        name: "alt",
        attr: "alt",
        type: "string",
        default: "''",
        description: "Alternative text for the image"
      },
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: "Enable animated shifting transitions on hover"
      },
      {
        name: "animation",
        attr: "animation",
        type: "\"bounce\" | \"expand\" | \"fade\" | \"fade-down\" | \"fade-in\" | \"fade-in-out\" | \"fade-left\" | \"fade-out\" | \"fade-right\" | \"fade-up\" | \"flip\" | \"flip-x\" | \"flip-y\" | \"float\" | \"glow\" | \"none\" | \"pulse\" | \"ring\" | \"ripple\" | \"rotate\" | \"scale\" | \"shake\" | \"shimmer\" | \"slide\" | \"slide-down\" | \"slide-in\" | \"slide-in-out\" | \"slide-left\" | \"slide-left-right\" | \"slide-out\" | \"slide-right\" | \"slide-up\" | \"slide-up-down\" | \"spin\" | \"spring\" | \"swing\" | \"wave\" | \"wobble\" | \"zoom\" | \"zoom-in\" | \"zoom-out\"",
        default: "'none'",
        description: "Animation type",
        options: [
          "bounce",
          "expand",
          "fade",
          "fade-down",
          "fade-in",
          "fade-in-out",
          "fade-left",
          "fade-out",
          "fade-right",
          "fade-up",
          "flip",
          "flip-x",
          "flip-y",
          "float",
          "glow",
          "none",
          "pulse",
          "ring",
          "ripple",
          "rotate",
          "scale",
          "shake",
          "shimmer",
          "slide",
          "slide-down",
          "slide-in",
          "slide-in-out",
          "slide-left",
          "slide-left-right",
          "slide-out",
          "slide-right",
          "slide-up",
          "slide-up-down",
          "spin",
          "spring",
          "swing",
          "wave",
          "wobble",
          "zoom",
          "zoom-in",
          "zoom-out"
        ]
      },
      {
        name: "autoColor",
        attr: "auto-color",
        type: "boolean",
        default: "false",
        description: "Auto-generate color from text"
      },
      {
        name: "avatars",
        type: "AvatarProps[]",
        default: "[]",
        description: "Array of avatar props for dynamic generation (if group is true)"
      },
      {
        name: "badge",
        attr: "badge",
        type: "number | string",
        default: "''",
        description: "Badge count/text overlay"
      },
      {
        name: "badgeColor",
        attr: "badge-color",
        type: "string",
        default: "'#ff4d4f'",
        description: "Badge color"
      },
      {
        name: "badgePosition",
        attr: "badge-position",
        type: "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
        default: "'top-right'",
        description: "Badge position",
        options: [
          "bottom-left",
          "bottom-right",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "bgColor",
        attr: "bg-color",
        type: "string",
        default: "'#52c41a'",
        description: "Background color for text/icon avatar"
      },
      {
        name: "border",
        attr: "border",
        type: "string",
        default: "''",
        description: "Border for avatar"
      },
      {
        name: "clickable",
        attr: "clickable",
        type: "boolean",
        default: "false",
        description: "Enable click handler"
      },
      {
        name: "color",
        attr: "color",
        type: "string",
        default: "'#ffffff'",
        description: "Text color for text/icon avatar"
      },
      {
        name: "content",
        attr: "content",
        type: "string",
        default: "",
        description: "Content to display (letter or text)"
      },
      {
        name: "crossOrigin",
        attr: "cross-origin",
        type: "\"\" | \"anonymous\" | \"use-credentials\"",
        default: "''",
        description: "CORS settings attributes",
        options: [
          "anonymous",
          "use-credentials"
        ]
      },
      {
        name: "editable",
        attr: "editable",
        type: "boolean",
        default: "false",
        description: "Enable edit/upload functionality"
      },
      {
        name: "enablePopover",
        attr: "enable-popover",
        type: "boolean",
        default: "true",
        description: "Enable popover to show all avatars when hovering over excess count"
      },
      {
        name: "fallbackIcon",
        attr: "fallback-icon",
        type: "string",
        default: "'fas fa-user'",
        description: "Fallback icon when no image"
      },
      {
        name: "fit",
        attr: "fit",
        type: "\"contain\" | \"cover\" | \"fill\" | \"scale-down\"",
        default: "'cover'",
        description: "Image fit mode",
        options: [
          "contain",
          "cover",
          "fill",
          "scale-down"
        ]
      },
      {
        name: "gap",
        attr: "gap",
        type: "number",
        default: "4",
        description: "Letter type unit distance between left and right sides"
      },
      {
        name: "glass",
        attr: "glass",
        type: "boolean",
        default: "false",
        description: "Enable glassmorphism effect"
      },
      {
        name: "gradient",
        attr: "gradient",
        type: "boolean",
        default: "false",
        description: "Use gradient background"
      },
      {
        name: "gradientColors",
        attr: "gradient-colors",
        type: "string",
        default: "''",
        description: "Gradient colors (array of 2 colors or comma-separated string)"
      },
      {
        name: "group",
        attr: "group",
        type: "boolean",
        default: "false",
        description: "Whether this avatar acts as a group container"
      },
      {
        name: "groupBorderColor",
        attr: "group-border-color",
        type: "string",
        default: "'white'",
        description: "Border color for avatars in the group"
      },
      {
        name: "groupBorderWidth",
        attr: "group-border-width",
        type: "number",
        default: "2",
        description: "Border width for avatars in the group"
      },
      {
        name: "href",
        attr: "href",
        type: "string",
        default: "''",
        description: "Optional URL to link the avatar to"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: "Custom icon for an icon avatar"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Library for the icon (e.g., 'se', 'fontawesome', etc.)",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "imgDraggable",
        attr: "img-draggable",
        type: "boolean",
        default: "true",
        description: "Whether the picture is allowed to be dragged"
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"default\" | \"grid\" | \"list\" | \"stack\"",
        default: "'stack'",
        description: "Layout mode for groups: 'stack' or 'grid'",
        options: [
          "default",
          "grid",
          "list",
          "stack"
        ]
      },
      {
        name: "lazy",
        attr: "lazy",
        type: "boolean",
        default: "false",
        description: "Enable lazy loading for images"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "max",
        attr: "max",
        type: "number | { count?: number; style?: any; popover?: any; }",
        default: "undefined as any",
        description: "Maximum config: number or object { count, style, popover } (if group is true)"
      },
      {
        name: "maxInitials",
        attr: "max-initials",
        type: "number",
        default: "2",
        description: "Maximum number of characters to show for initials"
      },
      {
        name: "maxVisible",
        attr: "max-visible",
        type: "number",
        default: "5",
        description: "Maximum number of avatars to display before grouping (if group is true)"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "",
        description: "Optional name to auto-calculate initials from"
      },
      {
        name: "overlap",
        attr: "overlap",
        type: "number",
        default: "undefined as any",
        description: "Overlapping amount (negative value for overlap)"
      },
      {
        name: "reflection",
        attr: "reflection",
        type: "boolean",
        default: "false",
        description: "Show premium reflection overlay"
      },
      {
        name: "responsiveSize",
        type: "{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number; }",
        default: "undefined as any",
        description: "Responsive size based on screen width"
      },
      {
        name: "ringColor",
        attr: "ring-color",
        type: "string",
        default: "'#3bf673'",
        description: "Ring color for animations"
      },
      {
        name: "segments",
        attr: "segments",
        type: "number",
        default: "0",
        description: "Number of segments for the story ring"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'circle'",
        description: "The shape of avatar: 'circle', 'square', 'hexagon', 'squircle'",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showStatus",
        attr: "show-status",
        type: "boolean",
        default: "false",
        description: "Show status indicator"
      },
      {
        name: "size",
        attr: "size",
        type: "number | string",
        default: "'m'",
        description: "The size of the avatar"
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "Show skeleton loading shimmer"
      },
      {
        name: "spacing",
        attr: "spacing",
        type: "number",
        default: "4",
        description: "Spacing between avatars (in pixels) for grid mode"
      },
      {
        name: "src",
        attr: "src",
        type: "string",
        default: "''",
        description: "The address of the image for an image avatar"
      },
      {
        name: "srcSet",
        attr: "src-set",
        type: "string",
        default: "''",
        description: "A list of sources to use for different screen resolutions"
      },
      {
        name: "status",
        attr: "status",
        type: "\"\" | \"away\" | \"busy\" | \"dnd\" | \"offline\" | \"online\"",
        default: "''",
        description: "User status indicator (online, offline, away, busy, dnd)",
        options: [
          "away",
          "busy",
          "dnd",
          "offline",
          "online"
        ]
      },
      {
        name: "statusPosition",
        attr: "status-position",
        type: "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
        default: "'bottom-right'",
        description: "Position of the status indicator",
        options: [
          "bottom-left",
          "bottom-right",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "statusPulse",
        attr: "status-pulse",
        type: "boolean",
        default: "false",
        description: "Animate status indicator"
      },
      {
        name: "story",
        attr: "story",
        type: "boolean",
        default: "false",
        description: "Show story ring (Instagram style)"
      },
      {
        name: "storySeen",
        attr: "story-seen",
        type: "boolean",
        default: "false",
        description: "Mark story as seen"
      },
      {
        name: "threeD",
        attr: "three-d",
        type: "boolean",
        default: "false",
        description: "Enable 3D hover effect"
      },
      {
        name: "tooltipText",
        attr: "tooltip-text",
        type: "string",
        default: "''",
        description: "Tooltip text to display on hover"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'default'",
        description: "Style variant of the avatar",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      },
      {
        name: "verified",
        attr: "verified",
        type: "boolean",
        default: "false",
        description: "Show verified badge"
      }
    ],
    events: [
      {
        name: "avatarClick",
        detail: "MouseEvent",
        description: "Handler when avatar is clicked"
      },
      {
        name: "avatarError",
        detail: "Event",
        description: "Handler when img load error"
      },
      {
        name: "avatarLoad",
        detail: "Event",
        description: "Handler when image loads successfully"
      },
      {
        name: "avatarMouseEnter",
        detail: "MouseEvent",
        description: "Handler when mouse enters"
      },
      {
        name: "avatarMouseLeave",
        detail: "MouseEvent",
        description: "Handler when mouse leaves"
      },
      {
        name: "avatarUpload",
        detail: "{ file: File; dataUrl: string; }",
        description: "Handler when file is uploaded"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-avatar active-speaker animation=\"none\" auto-color></ui-avatar>",
      stencil: "<ui-avatar activeSpeaker={true} animation=\"none\" autoColor={true}></ui-avatar>",
      react: "export default function Example() {\n  return <ui-avatar activeSpeaker animation=\"none\" autoColor></ui-avatar>;\n}",
      angular: "<ui-avatar [activeSpeaker]=\"true\" animation=\"none\" [autoColor]=\"true\"></ui-avatar>",
      vue: "<template>\n  <UiAvatar :active-speaker=\"true\" animation=\"none\" :auto-color=\"true\"></UiAvatar>\n</template>"
    }
  },
  {
    id: "layout-manager",
    name: "Layout Manager",
    tag: "layout-manager",
    category: "Layout",
    description: "Layout Manager web component (<layout-manager>).",
    totalProps: 1,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 0,
    color: "#38bdf8",
    props: [
      {
        name: "initialLayout",
        attr: "initial-layout",
        type: "string",
        default: "",
        description: ""
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<layout-manager></layout-manager>",
      stencil: "<layout-manager></layout-manager>",
      react: "export default function Example() {\n  return <layout-manager></layout-manager>;\n}",
      angular: "<layout-manager></layout-manager>",
      vue: "<template>\n  <LayoutManager></LayoutManager>\n</template>"
    }
  },
  {
    id: "lm-container",
    name: "Container",
    tag: "lm-container",
    category: "Layout",
    description: "Container web component (<lm-container>).",
    totalProps: 2,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 47,
    color: "#818cf8",
    props: [
      {
        name: "activeTabId",
        attr: "active-tab-id",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "node",
        type: "ContainerState",
        default: "",
        description: ""
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<lm-container></lm-container>",
      stencil: "<lm-container></lm-container>",
      react: "export default function Example() {\n  return <lm-container></lm-container>;\n}",
      angular: "<lm-container></lm-container>",
      vue: "<template>\n  <LmContainer></LmContainer>\n</template>"
    }
  },
  {
    id: "lm-floating-window",
    name: "Floating Window",
    tag: "lm-floating-window",
    category: "Layout",
    description: "Floating Window web component (<lm-floating-window>).",
    totalProps: 1,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 94,
    color: "#a855f7",
    props: [
      {
        name: "panelId",
        attr: "panel-id",
        type: "string",
        default: "",
        description: ""
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<lm-floating-window></lm-floating-window>",
      stencil: "<lm-floating-window></lm-floating-window>",
      react: "export default function Example() {\n  return <lm-floating-window></lm-floating-window>;\n}",
      angular: "<lm-floating-window></lm-floating-window>",
      vue: "<template>\n  <LmFloatingWindow></LmFloatingWindow>\n</template>"
    }
  },
  {
    id: "lm-panel",
    name: "Panel",
    tag: "lm-panel",
    category: "Layout",
    description: "Panel web component (<lm-panel>).",
    totalProps: 1,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 141,
    color: "#22d3ee",
    props: [
      {
        name: "panel",
        type: "PanelState",
        default: "",
        description: ""
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<lm-panel></lm-panel>",
      stencil: "<lm-panel></lm-panel>",
      react: "export default function Example() {\n  return <lm-panel></lm-panel>;\n}",
      angular: "<lm-panel></lm-panel>",
      vue: "<template>\n  <LmPanel></LmPanel>\n</template>"
    }
  },
  {
    id: "lm-splitter",
    name: "Splitter",
    tag: "lm-splitter",
    category: "Layout",
    description: "Splitter web component (<lm-splitter>).",
    totalProps: 3,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 188,
    color: "#34d399",
    props: [
      {
        name: "containerId",
        attr: "container-id",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "index",
        attr: "index",
        type: "number",
        default: "",
        description: ""
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<lm-splitter direction=\"horizontal\"></lm-splitter>",
      stencil: "<lm-splitter direction=\"horizontal\"></lm-splitter>",
      react: "export default function Example() {\n  return <lm-splitter direction=\"horizontal\"></lm-splitter>;\n}",
      angular: "<lm-splitter direction=\"horizontal\"></lm-splitter>",
      vue: "<template>\n  <LmSplitter direction=\"horizontal\"></LmSplitter>\n</template>"
    }
  },
  {
    id: "lm-tabs",
    name: "Tabs",
    tag: "lm-tabs",
    category: "Navigation",
    description: "Tabs web component (<lm-tabs>).",
    totalProps: 4,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 235,
    color: "#f472b6",
    props: [
      {
        name: "activeTabId",
        attr: "active-tab-id",
        type: "string",
        default: "",
        description: "",
        required: true
      },
      {
        name: "containerId",
        attr: "container-id",
        type: "string",
        default: "",
        description: "",
        required: true
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "panels",
        type: "PanelState[]",
        default: "",
        description: "",
        required: true
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<lm-tabs active-tab-id=\"Value\" container-id=\"Value\" mode=\"horizontal\"></lm-tabs>",
      stencil: "<lm-tabs active-tab-id=\"Value\" container-id=\"Value\" mode=\"horizontal\"></lm-tabs>",
      react: "export default function Example() {\n  return <lm-tabs active-tab-id=\"Value\" container-id=\"Value\" mode=\"horizontal\"></lm-tabs>;\n}",
      angular: "<lm-tabs active-tab-id=\"Value\" container-id=\"Value\" mode=\"horizontal\"></lm-tabs>",
      vue: "<template>\n  <LmTabs active-tab-id=\"Value\" container-id=\"Value\" mode=\"horizontal\"></LmTabs>\n</template>"
    }
  },
  {
    id: "nav-bar",
    name: "Nav Bar",
    tag: "nav-bar",
    category: "Navigation",
    description: "Nav Bar web component (<nav-bar>).",
    totalProps: 12,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 282,
    color: "#fbbf24",
    props: [
      {
        name: "appTitle",
        attr: "app-title",
        type: "string",
        default: "",
        description: "Application title"
      },
      {
        name: "bottomItems",
        type: "NavItem[]",
        default: "[]",
        description: "Navigation items for the bottom section"
      },
      {
        name: "bottomItemsSecondary",
        type: "NavItem[]",
        default: "[]",
        description: "Secondary navigation items for the bottom section"
      },
      {
        name: "collapsed",
        attr: "collapsed",
        type: "boolean",
        default: "true",
        description: "Whether the navigation is collapsed (mobile/hamburger mode)"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "logoAlt",
        attr: "logo-alt",
        type: "string",
        default: "'Logo'",
        description: "Logo alt text"
      },
      {
        name: "logoUrl",
        attr: "logo-url",
        type: "string",
        default: "",
        description: "Logo URL"
      },
      {
        name: "maxVisibleItems",
        attr: "max-visible-items",
        type: "number",
        default: "0",
        description: "Maximum number of visible items before showing overflow menu (0 = show all)"
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search...'",
        description: "Search placeholder text"
      },
      {
        name: "showHamburger",
        attr: "show-hamburger",
        type: "boolean",
        default: "true",
        description: "Whether to show the hamburger menu icon"
      },
      {
        name: "showSearch",
        attr: "show-search",
        type: "boolean",
        default: "false",
        description: "Whether to show search input for filtering items"
      },
      {
        name: "topItems",
        type: "NavItem[]",
        default: "[]",
        description: "Navigation items for the top section"
      }
    ],
    events: [
      {
        name: "navItemClicked",
        detail: "{ item: NavItem; isChild: boolean; }",
        description: "Event emitted when a nav item is clicked"
      },
      {
        name: "navToggled",
        detail: "{ collapsed: boolean; }",
        description: "Event emitted when navigation is toggled"
      }
    ],
    slots: [],
    usageCode: {
      html: "<nav-bar icon-library=\"default\" show-search></nav-bar>",
      stencil: "<nav-bar icon-library=\"default\" showSearch={true}></nav-bar>",
      react: "export default function Example() {\n  return <nav-bar icon-library=\"default\" showSearch></nav-bar>;\n}",
      angular: "<nav-bar icon-library=\"default\" [showSearch]=\"true\"></nav-bar>",
      vue: "<template>\n  <NavBar icon-library=\"default\" :show-search=\"true\"></NavBar>\n</template>"
    }
  },
  {
    id: "smart-step",
    name: "Smart Step",
    tag: "smart-step",
    category: "Navigation",
    description: "Smart Step web component (<smart-step>).",
    totalProps: 6,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 329,
    color: "#fb7185",
    props: [
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "",
        description: "Optional description/subtitle for the step"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether this step is disabled (not clickable)"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: "Optional icon/number to display. If not provided, parent SmartStepper can provide an index."
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'default'",
        description: "Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.)",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "The label to display for the step"
      },
      {
        name: "status",
        attr: "status",
        type: "\"default\" | \"error\" | \"success\"",
        default: "'default'",
        description: "Whether the step is valid/finished (optional status indicator)",
        options: [
          "default",
          "error",
          "success"
        ]
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<smart-step disabled icon-library=\"default\" status=\"default\"></smart-step>",
      stencil: "<smart-step disabled={true} icon-library=\"default\" status=\"default\"></smart-step>",
      react: "export default function Example() {\n  return <smart-step disabled icon-library=\"default\" status=\"default\"></smart-step>;\n}",
      angular: "<smart-step [disabled]=\"true\" icon-library=\"default\" status=\"default\"></smart-step>",
      vue: "<template>\n  <SmartStep :disabled=\"true\" icon-library=\"default\" status=\"default\"></SmartStep>\n</template>"
    }
  },
  {
    id: "timeline-item",
    name: "Timeline Item",
    tag: "timeline-item",
    category: "Data Display",
    description: "Timeline Item web component (<timeline-item>).",
    totalProps: 3,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 16,
    color: "#38bdf8",
    props: [
      {
        name: "itemDate",
        attr: "item-date",
        type: "string",
        default: "",
        description: "The date of the timeline item."
      },
      {
        name: "itemDescription",
        attr: "item-description",
        type: "string",
        default: "",
        description: "The description of the timeline item."
      },
      {
        name: "itemTitle",
        attr: "item-title",
        type: "string",
        default: "",
        description: "The title of the timeline item."
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<timeline-item></timeline-item>",
      stencil: "<timeline-item></timeline-item>",
      react: "export default function Example() {\n  return <timeline-item></timeline-item>;\n}",
      angular: "<timeline-item></timeline-item>",
      vue: "<template>\n  <TimelineItem></TimelineItem>\n</template>"
    }
  },
  {
    id: "accordion",
    name: "Accordion",
    tag: "ui-accordion",
    category: "Layout",
    description: "Accordion web component (<ui-accordion>).",
    totalProps: 60,
    totalEvents: 8,
    variantsCount: 12,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 63,
    color: "#818cf8",
    props: [
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "300",
        description: "Animation duration in milliseconds"
      },
      {
        name: "animationTiming",
        attr: "animation-timing",
        type: "\"ease\" | \"ease-in\" | \"ease-in-out\" | \"ease-out\" | \"linear\" | \"none\"",
        default: "'ease'",
        description: "Animation timing function",
        options: [
          "ease",
          "ease-in",
          "ease-in-out",
          "ease-out",
          "linear",
          "none"
        ]
      },
      {
        name: "arrowIconCollapsed",
        attr: "arrow-icon-collapsed",
        type: "string",
        default: "'chevron-right'",
        description: "Custom arrow icon for collapsed state"
      },
      {
        name: "arrowIconExpanded",
        attr: "arrow-icon-expanded",
        type: "string",
        default: "'chevron-down'",
        description: "Custom arrow icon for expanded state"
      },
      {
        name: "autoScroll",
        attr: "auto-scroll",
        type: "boolean",
        default: "false",
        description: "Automatically scroll the item into view when it is opened if it's partially off-screen"
      },
      {
        name: "backgroundColor",
        attr: "background-color",
        type: "string",
        default: "'white'",
        description: "Background color of the accordion"
      },
      {
        name: "columns",
        attr: "columns",
        type: "number",
        default: "1",
        description: "Grid columns count for accordion items (Large screens only)"
      },
      {
        name: "defaultOpen",
        type: "string[]",
        default: "[]",
        description: "IDs of items that should be open by default"
      },
      {
        name: "dense",
        attr: "dense",
        type: "boolean",
        default: "false",
        description: "Compact/dense mode"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the entire accordion"
      },
      {
        name: "enableAISummaries",
        attr: "enable-a-i-summaries",
        type: "boolean",
        default: "false",
        description: "Enable AI-generated content briefing tooltips on hover"
      },
      {
        name: "enableAnimation",
        attr: "enable-animation",
        type: "boolean",
        default: "true",
        description: "Enable global animations"
      },
      {
        name: "enableCollaborators",
        attr: "enable-collaborators",
        type: "boolean",
        default: "false",
        description: "Enable real-time collaborator presence indicators in headers"
      },
      {
        name: "enableDragDrop",
        attr: "enable-drag-drop",
        type: "boolean",
        default: "false",
        description: "Enable drag & drop reordering"
      },
      {
        name: "enableExpandCollapseAll",
        attr: "enable-expand-collapse-all",
        type: "boolean",
        default: "false",
        description: "Show expand/collapse all buttons"
      },
      {
        name: "enableGestures",
        attr: "enable-gestures",
        type: "boolean",
        default: "false",
        description: "Enable tactile swipe gestures for item actions (Mobile Context)"
      },
      {
        name: "enableHaptics",
        attr: "enable-haptics",
        type: "boolean",
        default: "false",
        description: "Enable auditory haptics (premium click/collapse sounds)"
      },
      {
        name: "enableHolographic",
        attr: "enable-holographic",
        type: "boolean",
        default: "false",
        description: "Enable Advanced 3D 'Holographic' depth stacking on expansion"
      },
      {
        name: "enableLocking",
        attr: "enable-locking",
        type: "boolean",
        default: "false",
        description: "Enable Pattern-Lock security for sensitive items"
      },
      {
        name: "enableNested",
        attr: "enable-nested",
        type: "boolean",
        default: "false",
        description: "Enable nested accordion support"
      },
      {
        name: "enableParallax",
        attr: "enable-parallax",
        type: "boolean",
        default: "false",
        description: "Enable 3D Parallax depth effect on hover (Premium themes only)"
      },
      {
        name: "enablePersistence",
        attr: "enable-persistence",
        type: "boolean",
        default: "false",
        description: "Save state to localStorage"
      },
      {
        name: "enablePortalReader",
        attr: "enable-portal-reader",
        type: "boolean",
        default: "false",
        description: "Enable full-screen 'Reading Portal' mode for deep-focus content analysis"
      },
      {
        name: "enableQuickActions",
        attr: "enable-quick-actions",
        type: "boolean",
        default: "false",
        description: "Enable floating Quick Actions toolbar on hover"
      },
      {
        name: "enableRanking",
        attr: "enable-ranking",
        type: "boolean",
        default: "false",
        description: "Automatically rank items based on their usage heat (requires persistState)"
      },
      {
        name: "enableSearch",
        attr: "enable-search",
        type: "boolean",
        default: "false",
        description: "Enable search/filter functionality"
      },
      {
        name: "enableSearchHeatmap",
        attr: "enable-search-heatmap",
        type: "boolean",
        default: "false",
        description: "Enable a visual search \"Mini-map\" (Heatmap) on the right side"
      },
      {
        name: "enableSnapshots",
        attr: "enable-snapshots",
        type: "boolean",
        default: "false",
        description: "Enable Workflow 'Snapshots' (save/load open states)"
      },
      {
        name: "enableSparklines",
        attr: "enable-sparklines",
        type: "boolean",
        default: "false",
        description: "Enable high-precision header sparklines for analytical data"
      },
      {
        name: "enableStreaming",
        attr: "enable-streaming",
        type: "boolean",
        default: "false",
        description: "Enable real-time, auto-scrolling telemetry terminals inside items"
      },
      {
        name: "enableTeleportation",
        attr: "enable-teleportation",
        type: "boolean",
        default: "false",
        description: "Enable Smart-Link 'Teleportation' between accordion sections"
      },
      {
        name: "enableVoiceControl",
        attr: "enable-voice-control",
        type: "boolean",
        default: "false",
        description: "Enable Voice-Activated industrial navigation (Hands-Free)"
      },
      {
        name: "expandedItems",
        type: "string[]",
        default: "null",
        description: "Controlled open items (overrides internal state if provided)"
      },
      {
        name: "focusTimeout",
        attr: "focus-timeout",
        type: "number",
        default: "0",
        description: "Automatically collapse sections after X milliseconds of inactivity (0 to disable)"
      },
      {
        name: "haptic",
        attr: "haptic",
        type: "boolean",
        default: "true",
        description: "Enable haptic feedback on interaction"
      },
      {
        name: "headerLevel",
        attr: "header-level",
        type: "1 | 2 | 3 | 4 | 5 | 6",
        default: "3",
        description: "Header heading level (1-6) for accessibility"
      },
      {
        name: "hideArrow",
        attr: "hide-arrow",
        type: "boolean",
        default: "false",
        description: "Hide arrow icon completely"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'lucide'",
        description: "Default library to use for icons (e.g., 'se', 'fontawesome', 'lucide', 'emoji', etc.)",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"end\" | \"start\"",
        default: "'end'",
        description: "Position of the expand icon: 'start' | 'end'",
        options: [
          "end",
          "start"
        ]
      },
      {
        name: "items",
        type: "AccordionItem[]",
        default: "[]",
        description: "Array of accordion items"
      },
      {
        name: "lazyRender",
        attr: "lazy-render",
        type: "boolean",
        default: "false",
        description: "Only render accordion content when it is first opened (Performance)"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Show global skeleton loading state"
      },
      {
        name: "multiple",
        attr: "multiple",
        type: "boolean",
        default: "false",
        description: "Allow multiple items to be open at once"
      },
      {
        name: "persistState",
        attr: "persist-state",
        type: "string",
        default: "''",
        description: "Enable state persistence - if provided, the string will be used as a localStorage key"
      },
      {
        name: "persistenceKey",
        attr: "persistence-key",
        type: "string",
        default: "'ui-accordion-state'",
        description: "localStorage key for persistence"
      },
      {
        name: "physics",
        attr: "physics",
        type: "\"bouncy\" | \"liquid\" | \"standard\"",
        default: "'standard'",
        description: "Creative/Motion Variants",
        options: [
          "bouncy",
          "liquid",
          "standard"
        ]
      },
      {
        name: "printExpandAll",
        attr: "print-expand-all",
        type: "boolean",
        default: "false",
        description: "Automatically expand all items and hide interactive controls when printing"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "Right-to-left mode"
      },
      {
        name: "scrollBehavior",
        attr: "scroll-behavior",
        type: "\"auto\" | \"smooth\"",
        default: "'smooth'",
        description: "Scrolling behavior when autoScroll is enabled",
        options: [
          "auto",
          "smooth"
        ]
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search...'",
        description: "Search input placeholder"
      },
      {
        name: "selectedHeaderColor",
        attr: "selected-header-color",
        type: "string",
        default: "'#10b981'",
        description: "Custom color for selected header (default: #10b981)"
      },
      {
        name: "selectionPosition",
        attr: "selection-position",
        type: "\"left\" | \"none\" | \"top\"",
        default: "'left'",
        description: "Position of the selection indicator: 'left' | 'top' | 'none'",
        options: [
          "left",
          "none",
          "top"
        ]
      },
      {
        name: "showBreadcrumbs",
        attr: "show-breadcrumbs",
        type: "boolean",
        default: "false",
        description: "Show a navigation trail (breadcrumbs) for nested items in their headers"
      },
      {
        name: "showNumbers",
        attr: "show-numbers",
        type: "boolean",
        default: "false",
        description: "Show numbered indicators above the accordion"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"main\" | \"md\" | \"medium\" | \"popover\" | \"section\" | \"sm\" | \"small\" | \"subsection\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Size of the accordion: 'sm' | 'md' | 'lg'",
        options: [
          "default",
          "large",
          "lg",
          "main",
          "md",
          "medium",
          "popover",
          "section",
          "sm",
          "small",
          "subsection",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "stickyHeaders",
        attr: "sticky-headers",
        type: "boolean",
        default: "false",
        description: "Pin headers to the top during long content scrolls"
      },
      {
        name: "syncGroup",
        attr: "sync-group",
        type: "string",
        default: "''",
        description: "Optional name for a synchronization group. All accordions with the same group name will synchronize their toggle states globally."
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"default\" | \"glass\" | \"radiant\"",
        default: "'default'",
        description: "Visual theme: 'default' | 'glass' | 'radiant'",
        options: [
          "default",
          "glass",
          "radiant"
        ]
      },
      {
        name: "toggleStyle",
        attr: "toggle-style",
        type: "\"chevron\" | \"plus-minus\"",
        default: "'chevron'",
        description: "Toggle icon style: 'chevron' | 'plus-minus'",
        options: [
          "chevron",
          "plus-minus"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"boxed\" | \"card\" | \"card-list\" | \"default\" | \"headline\" | \"iconic\" | \"left-toggle\" | \"light\" | \"minimal\" | \"shadow\" | \"splitted\"",
        default: "'default'",
        description: "Accordion variant: 'default' | 'bordered' | 'splitted' | 'light' | 'shadow' | 'card' | 'card-list' | 'headline' | 'boxed' | 'minimal' | 'left-toggle' | 'iconic' Use 'card' or 'card-list' for a separated card layout with icon pills and a right-chevron. Use 'headline' for a minimalist, high-impact typography-first layout. Use 'boxed' for dark individual cards with glowing yellow action badges. Use 'minimal' for border-bottom separators and clean typography. Use 'left-toggle' for a left plus-minus toggle structure. Use 'iconic' for custom left status/brand icons with micro plus-minus toggles.",
        options: [
          "bordered",
          "boxed",
          "card",
          "card-list",
          "default",
          "headline",
          "iconic",
          "left-toggle",
          "light",
          "minimal",
          "shadow",
          "splitted"
        ]
      }
    ],
    events: [
      {
        name: "accordionAction",
        detail: "AccordionActionEvent",
        description: ""
      },
      {
        name: "accordionChange",
        detail: "AccordionChangeEvent",
        description: ""
      },
      {
        name: "accordionReorder",
        detail: "AccordionReorderEvent",
        description: ""
      },
      {
        name: "accordionSearch",
        detail: "AccordionSearchEvent",
        description: ""
      },
      {
        name: "afterClose",
        detail: "AccordionAnimationEvent",
        description: ""
      },
      {
        name: "afterOpen",
        detail: "AccordionAnimationEvent",
        description: ""
      },
      {
        name: "beforeClose",
        detail: "AccordionAnimationEvent",
        description: ""
      },
      {
        name: "beforeOpen",
        detail: "AccordionAnimationEvent",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-accordion animation-timing=\"ease\" auto-scroll dense></ui-accordion>",
      stencil: "<ui-accordion animation-timing=\"ease\" autoScroll={true} dense={true}></ui-accordion>",
      react: "export default function Example() {\n  return <ui-accordion animation-timing=\"ease\" autoScroll dense></ui-accordion>;\n}",
      angular: "<ui-accordion animation-timing=\"ease\" [autoScroll]=\"true\" [dense]=\"true\"></ui-accordion>",
      vue: "<template>\n  <UiAccordion animation-timing=\"ease\" :auto-scroll=\"true\" :dense=\"true\"></UiAccordion>\n</template>"
    }
  },
  {
    id: "advanced-data-table",
    name: "Advanced Data Table",
    tag: "ui-advanced-data-table",
    category: "Data Display",
    description: "Advanced Data Table web component (<ui-advanced-data-table>).",
    totalProps: 98,
    totalEvents: 23,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 110,
    color: "#a855f7",
    props: [
      {
        name: "advancedCellEditors",
        attr: "advanced-cell-editors",
        type: "boolean",
        default: "true",
        description: "Enable advanced cell editors (date picker, dropdown, etc.)"
      },
      {
        name: "advancedFilters",
        attr: "advanced-filters",
        type: "boolean",
        default: "false",
        description: "Enable advanced filter operators"
      },
      {
        name: "advancedValidation",
        attr: "advanced-validation",
        type: "boolean",
        default: "false",
        description: "Enable advanced validation (ranges, lists)"
      },
      {
        name: "aggregationFunctions",
        attr: "aggregation-functions",
        type: "string | string[]",
        default: "['sum', 'avg', 'min', 'max', 'count']",
        description: "Aggregation functions to show"
      },
      {
        name: "autoSizeColumns",
        attr: "auto-size-columns",
        type: "boolean",
        default: "false",
        description: "Enable column auto-sizing"
      },
      {
        name: "bordered",
        attr: "bordered",
        type: "boolean",
        default: "true",
        description: "Enable borders"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "High-Fidelity: Primary color theme",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "columnAggregation",
        attr: "column-aggregation",
        type: "boolean",
        default: "false",
        description: "Enable column aggregation (sum, avg, min, max)"
      },
      {
        name: "columnFormatting",
        attr: "column-formatting",
        type: "boolean",
        default: "true",
        description: "Enable column formatting (currency, date, percentage)"
      },
      {
        name: "columnGrouping",
        attr: "column-grouping",
        type: "boolean",
        default: "false",
        description: "Enable column grouping (multi-level headers)"
      },
      {
        name: "columnPinning",
        attr: "column-pinning",
        type: "boolean",
        default: "true",
        description: "Enable column pinning"
      },
      {
        name: "columnReorder",
        attr: "column-reorder",
        type: "boolean",
        default: "true",
        description: "Enable column reordering"
      },
      {
        name: "columnVisibility",
        attr: "column-visibility",
        type: "boolean",
        default: "true",
        description: "Enable column visibility toggle"
      },
      {
        name: "columns",
        attr: "columns",
        type: "TableColumn[] | string",
        default: "[]",
        description: "Columns definition"
      },
      {
        name: "conditionalFormatting",
        attr: "conditional-formatting",
        type: "boolean",
        default: "false",
        description: "Enable conditional formatting (color scales, data bars)"
      },
      {
        name: "config",
        attr: "config",
        type: "TableConfig | string",
        default: "{\r\n    columns: [],\r\n    data: [],\r\n    selectable: false,\r\n    pagination: true,\r\n    pageSize: 10,\r\n  }",
        description: "Table configuration"
      },
      {
        name: "contextMenu",
        attr: "context-menu",
        type: "boolean",
        default: "false",
        description: "Enable context menus on right click"
      },
      {
        name: "copyPaste",
        attr: "copy-paste",
        type: "boolean",
        default: "false",
        description: "Enable copy/paste functionality"
      },
      {
        name: "customActions",
        type: "{ label: string; value: string; icon?: string; iconLibrary?: string; }[]",
        default: "",
        description: "Custom actions to show in the row actions menu"
      },
      {
        name: "data",
        attr: "data",
        type: "TableRow[] | string",
        default: "[]",
        description: "Table data"
      },
      {
        name: "editable",
        attr: "editable",
        type: "boolean",
        default: "false",
        description: "Enable inline editing"
      },
      {
        name: "emptyMessage",
        attr: "empty-message",
        type: "string",
        default: "'No data available'",
        description: "Empty message"
      },
      {
        name: "enableSparklines",
        attr: "enable-sparklines",
        type: "boolean",
        default: "false",
        description: "Enable sparklines in cells"
      },
      {
        name: "enhancedAccessibility",
        attr: "enhanced-accessibility",
        type: "boolean",
        default: "true",
        description: "Enable enhanced accessibility features"
      },
      {
        name: "excelExport",
        attr: "excel-export",
        type: "boolean",
        default: "false",
        description: "Enable Excel export (.xlsx)"
      },
      {
        name: "expandGroupsByDefault",
        attr: "expand-groups-by-default",
        type: "boolean",
        default: "true",
        description: "Expand groups by default"
      },
      {
        name: "exportable",
        attr: "exportable",
        type: "boolean",
        default: "true",
        description: "Enable export"
      },
      {
        name: "filterable",
        attr: "filterable",
        type: "boolean",
        default: "true",
        description: "Enable filtering"
      },
      {
        name: "formattingRules",
        attr: "formatting-rules",
        type: "any",
        default: "{}",
        description: "Conditional formatting rules"
      },
      {
        name: "groupBy",
        attr: "group-by",
        type: "string",
        default: "''",
        description: "Field to group by (for row grouping)"
      },
      {
        name: "grouping",
        attr: "grouping",
        type: "boolean",
        default: "false",
        description: "Enable data grouping"
      },
      {
        name: "headerBackground",
        attr: "header-background",
        type: "string",
        default: "",
        description: "Custom header background (solid color or gradient)"
      },
      {
        name: "hoverable",
        attr: "hoverable",
        type: "boolean",
        default: "true",
        description: "Enable hover effect"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "inlineValidation",
        attr: "inline-validation",
        type: "boolean",
        default: "false",
        description: "Enable inline validation"
      },
      {
        name: "keyboardShortcuts",
        attr: "keyboard-shortcuts",
        type: "boolean",
        default: "true",
        description: "Enable keyboard shortcuts"
      },
      {
        name: "lazyLoad",
        attr: "lazy-load",
        type: "boolean",
        default: "false",
        description: "Enable lazy loading of data"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "maxSortColumns",
        attr: "max-sort-columns",
        type: "number",
        default: "3",
        description: "Maximum number of sort columns"
      },
      {
        name: "mobileCardView",
        attr: "mobile-card-view",
        type: "boolean",
        default: "true",
        description: "Enable mobile card view for sm screens"
      },
      {
        name: "multiFilter",
        attr: "multi-filter",
        type: "boolean",
        default: "true",
        description: "Enable multi-column filtering"
      },
      {
        name: "multiSelect",
        attr: "multi-select",
        type: "boolean",
        default: "true",
        description: "Enable multiple row selection"
      },
      {
        name: "multiSort",
        attr: "multi-sort",
        type: "boolean",
        default: "false",
        description: "Enable multi-column sorting"
      },
      {
        name: "pageSize",
        attr: "page-size",
        type: "number",
        default: "10",
        description: "Page size"
      },
      {
        name: "pageSizeOptions",
        attr: "page-size-options",
        type: "number[] | string",
        default: "[5, 10, 25, 50, 100]",
        description: "Page size options"
      },
      {
        name: "pagination",
        attr: "pagination",
        type: "boolean",
        default: "true",
        description: "Enable pagination"
      },
      {
        name: "paginationAutoHide",
        attr: "pagination-auto-hide",
        type: "boolean",
        default: "true",
        description: "Auto-hide pagination on single page"
      },
      {
        name: "paginationKeyboardNav",
        attr: "pagination-keyboard-nav",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation for pagination"
      },
      {
        name: "paginationMobileBreakpoint",
        attr: "pagination-mobile-breakpoint",
        type: "number",
        default: "768",
        description: "Mobile breakpoint for pagination"
      },
      {
        name: "paginationPersistPage",
        attr: "pagination-persist-page",
        type: "boolean",
        default: "false",
        description: "Persist page to localStorage"
      },
      {
        name: "paginationQuickJump",
        attr: "pagination-quick-jump",
        type: "boolean",
        default: "false",
        description: "Enable quick jump buttons"
      },
      {
        name: "paginationQuickJumpStep",
        attr: "pagination-quick-jump-step",
        type: "number",
        default: "5",
        description: "Quick jump step size"
      },
      {
        name: "paginationResponsive",
        attr: "pagination-responsive",
        type: "boolean",
        default: "true",
        description: "Responsive pagination mode"
      },
      {
        name: "paginationShape",
        attr: "pagination-shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'default'",
        description: "Pagination shape",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "paginationShowProgress",
        attr: "pagination-show-progress",
        type: "boolean",
        default: "false",
        description: "Show progress indicator"
      },
      {
        name: "paginationSmartCompact",
        attr: "pagination-smart-compact",
        type: "boolean",
        default: "false",
        description: "Smart compact mode"
      },
      {
        name: "paginationSmartCompactThreshold",
        attr: "pagination-smart-compact-threshold",
        type: "number",
        default: "20",
        description: "Smart compact threshold"
      },
      {
        name: "paginationSticky",
        attr: "pagination-sticky",
        type: "boolean",
        default: "false",
        description: "Sticky pagination"
      },
      {
        name: "paginationStickyPosition",
        attr: "pagination-sticky-position",
        type: "\"bottom\" | \"top\"",
        default: "'bottom'",
        description: "Sticky position",
        options: [
          "bottom",
          "top"
        ]
      },
      {
        name: "paginationStorageKey",
        attr: "pagination-storage-key",
        type: "string",
        default: "'table-page'",
        description: "LocalStorage key"
      },
      {
        name: "paginationSwipeGestures",
        attr: "pagination-swipe-gestures",
        type: "boolean",
        default: "true",
        description: "Enable swipe gestures"
      },
      {
        name: "paginationTheme",
        attr: "pagination-theme",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Pagination theme",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "paginationTransitions",
        attr: "pagination-transitions",
        type: "boolean",
        default: "true",
        description: "Enable page transitions"
      },
      {
        name: "paginationUrlParam",
        attr: "pagination-url-param",
        type: "string",
        default: "'page'",
        description: "URL parameter name"
      },
      {
        name: "paginationUrlSync",
        attr: "pagination-url-sync",
        type: "boolean",
        default: "false",
        description: "Sync pagination with URL"
      },
      {
        name: "pdfExport",
        attr: "pdf-export",
        type: "boolean",
        default: "false",
        description: "Enable PDF export"
      },
      {
        name: "persistState",
        attr: "persist-state",
        type: "boolean",
        default: "false",
        description: "Persist table state to localStorage"
      },
      {
        name: "printOptimized",
        attr: "print-optimized",
        type: "boolean",
        default: "false",
        description: "Enable print optimization"
      },
      {
        name: "rangeSelection",
        attr: "range-selection",
        type: "boolean",
        default: "false",
        description: "Enable range selection (Shift+Click)"
      },
      {
        name: "rowDetails",
        attr: "row-details",
        type: "boolean",
        default: "false",
        description: "Enable row details panel"
      },
      {
        name: "rowHeight",
        attr: "row-height",
        type: "\"comfortable\" | \"compact\" | \"cozy\" | \"normal\"",
        default: "'normal'",
        description: "Row height variant",
        options: [
          "comfortable",
          "compact",
          "cozy",
          "normal"
        ]
      },
      {
        name: "rowPinning",
        attr: "row-pinning",
        type: "boolean",
        default: "true",
        description: "Enable row pinning"
      },
      {
        name: "rowReorder",
        attr: "row-reorder",
        type: "boolean",
        default: "false",
        description: "Enable row reordering via drag and drop"
      },
      {
        name: "rowSpanning",
        attr: "row-spanning",
        type: "boolean",
        default: "false",
        description: "Enable row spanning"
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "true",
        description: "Enable global search"
      },
      {
        name: "selectable",
        attr: "selectable",
        type: "boolean",
        default: "false",
        description: "Enable row selection"
      },
      {
        name: "serverSide",
        attr: "server-side",
        type: "boolean",
        default: "false",
        description: "Server-side mode"
      },
      {
        name: "showActions",
        attr: "show-actions",
        type: "boolean",
        default: "false",
        description: "Show actions menu (3-dot menu) for each row"
      },
      {
        name: "showColumnPanel",
        attr: "show-column-panel",
        type: "boolean",
        default: "false",
        description: "Show column panel"
      },
      {
        name: "showFilterPanel",
        attr: "show-filter-panel",
        type: "boolean",
        default: "false",
        description: "Show filter panel"
      },
      {
        name: "showGroupCount",
        attr: "show-group-count",
        type: "boolean",
        default: "true",
        description: "Show group count"
      },
      {
        name: "showGroupingControls",
        attr: "show-grouping-controls",
        type: "boolean",
        default: "true",
        description: "Enable row grouping controls in toolbar"
      },
      {
        name: "showSkeleton",
        attr: "show-skeleton",
        type: "boolean",
        default: "true",
        description: "Show skeleton while loading"
      },
      {
        name: "skeletonRows",
        attr: "skeleton-rows",
        type: "number",
        default: "5",
        description: "Number of skeleton rows to show"
      },
      {
        name: "sortable",
        attr: "sortable",
        type: "boolean",
        default: "true",
        description: "Enable sorting"
      },
      {
        name: "stateStorageKey",
        attr: "state-storage-key",
        type: "string",
        default: "'table-state'",
        description: "LocalStorage key for state persistence"
      },
      {
        name: "stickyHeader",
        attr: "sticky-header",
        type: "boolean",
        default: "true",
        description: "Enable sticky header"
      },
      {
        name: "striped",
        attr: "striped",
        type: "boolean",
        default: "true",
        description: "Enable striped rows"
      },
      {
        name: "stripedColor",
        attr: "striped-color",
        type: "string",
        default: "",
        description: "Custom striped row color for light mode"
      },
      {
        name: "stripedColorDark",
        attr: "striped-color-dark",
        type: "string",
        default: "",
        description: "Custom striped row color for dark mode"
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"auto\" | \"dark\" | \"default\" | \"green\" | \"light\"",
        default: "'auto'",
        description: "Theme mode",
        options: [
          "auto",
          "dark",
          "default",
          "green",
          "light"
        ]
      },
      {
        name: "totalRows",
        attr: "total-rows",
        type: "number",
        default: "0",
        description: "Total rows (for server-side pagination)"
      },
      {
        name: "treeData",
        attr: "tree-data",
        type: "boolean",
        default: "false",
        description: "Enable Tree Data mode (hierarchical)"
      },
      {
        name: "undoRedo",
        attr: "undo-redo",
        type: "boolean",
        default: "false",
        description: "Enable undo/redo functionality"
      },
      {
        name: "validationRules",
        attr: "validation-rules",
        type: "any",
        default: "{}",
        description: "Validation rules for columns"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"borderless\" | \"default\" | \"glass\" | \"raised\"",
        default: "'default'",
        description: "High-Fidelity: Table variant",
        options: [
          "borderless",
          "default",
          "glass",
          "raised"
        ]
      },
      {
        name: "virtualRowHeight",
        attr: "virtual-row-height",
        type: "number",
        default: "48",
        description: "Row height for virtual scrolling (px)"
      },
      {
        name: "virtualScroll",
        attr: "virtual-scroll",
        type: "boolean",
        default: "false",
        description: "Enable virtual scrolling for performance with lg datasets"
      }
    ],
    events: [
      {
        name: "cellEdit",
        detail: "{ rowId: string | number; field: string; value: any; }",
        description: ""
      },
      {
        name: "cellEditStart",
        detail: "{ rowId: string | number; field: string; value: any; }",
        description: ""
      },
      {
        name: "cellEditStop",
        detail: "{ rowId: string | number; field: string; value: any; }",
        description: ""
      },
      {
        name: "columnOrderChange",
        detail: "{ order: string[]; }",
        description: ""
      },
      {
        name: "columnPin",
        detail: "{ columnId: string; position: \"none\" | LeftRight; }",
        description: ""
      },
      {
        name: "columnVisibilityChange",
        detail: "{ visible: string[]; }",
        description: ""
      },
      {
        name: "dataExport",
        detail: "{ data: any[]; format: string; }",
        description: ""
      },
      {
        name: "filterChange",
        detail: "FilterConfig",
        description: ""
      },
      {
        name: "groupByChange",
        detail: "{ field: string; }",
        description: ""
      },
      {
        name: "groupToggle",
        detail: "{ groupKey: string; expanded: boolean; }",
        description: ""
      },
      {
        name: "lazyLoadMore",
        detail: "{ currentCount: number; }",
        description: ""
      },
      {
        name: "pageChange",
        detail: "{ page: number; pageSize: number; }",
        description: ""
      },
      {
        name: "rowAction",
        detail: "{ row: any; action: string; }",
        description: ""
      },
      {
        name: "rowDelete",
        detail: "{ row: any; }",
        description: ""
      },
      {
        name: "rowDeselect",
        detail: "{ selectedRows: (string | number)[]; }",
        description: ""
      },
      {
        name: "rowEdit",
        detail: "{ row: any; }",
        description: ""
      },
      {
        name: "rowEditStart",
        detail: "{ row: any; }",
        description: ""
      },
      {
        name: "rowEditStop",
        detail: "{ row: any; }",
        description: ""
      },
      {
        name: "rowPin",
        detail: "{ rowId: number; position: \"none\" | TopBottom; }",
        description: ""
      },
      {
        name: "rowReorderEvent",
        detail: "{ fromIndex: number; toIndex: number; }",
        description: ""
      },
      {
        name: "rowSelect",
        detail: "{ selectedRows: (string | number)[]; }",
        description: "Events"
      },
      {
        name: "searchChange",
        detail: "{ query: string; }",
        description: ""
      },
      {
        name: "sortChange",
        detail: "SortConfig",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-advanced-data-table advanced-filters advanced-validation auto-size-columns></ui-advanced-data-table>",
      stencil: "<ui-advanced-data-table advancedFilters={true} advancedValidation={true} autoSizeColumns={true}></ui-advanced-data-table>",
      react: "export default function Example() {\n  return <ui-advanced-data-table advancedFilters advancedValidation autoSizeColumns></ui-advanced-data-table>;\n}",
      angular: "<ui-advanced-data-table [advancedFilters]=\"true\" [advancedValidation]=\"true\" [autoSizeColumns]=\"true\"></ui-advanced-data-table>",
      vue: "<template>\n  <UiAdvancedDataTable :advanced-filters=\"true\" :advanced-validation=\"true\" :auto-size-columns=\"true\"></UiAdvancedDataTable>\n</template>"
    }
  },
  {
    id: "anchor",
    name: "Anchor",
    tag: "ui-anchor",
    category: "Navigation",
    description: "Anchor web component (<ui-anchor>).",
    totalProps: 32,
    totalEvents: 7,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 157,
    color: "#22d3ee",
    props: [
      {
        name: "activeColor",
        attr: "active-color",
        type: "string",
        default: "'#18ff3e'",
        description: "Color of the active indicator"
      },
      {
        name: "activeItem",
        attr: "active-item",
        type: "string",
        default: "''",
        description: "Currently active item id"
      },
      {
        name: "activeLink",
        attr: "active-link",
        type: "string",
        default: "''",
        description: "Alias for activeItem (backward-compat)"
      },
      {
        name: "affix",
        attr: "affix",
        type: "boolean",
        default: "false",
        description: "Enable affix/sticky behavior on scroll"
      },
      {
        name: "affixOffset",
        attr: "affix-offset",
        type: "number",
        default: "20",
        description: "Scroll threshold (px) before affix kicks in"
      },
      {
        name: "alignment",
        attr: "alignment",
        type: "\"center\" | \"left\" | \"right\"",
        default: "'left'",
        description: "Text alignment inside items",
        options: [
          "center",
          "left",
          "right"
        ]
      },
      {
        name: "arrowNavigation",
        attr: "arrow-navigation",
        type: "boolean",
        default: "true",
        description: "Enable keyboard arrow navigation between items"
      },
      {
        name: "autoGenContainer",
        attr: "auto-gen-container",
        type: "string",
        default: "''",
        description: "CSS selector of container to auto-generate links from h1-h4"
      },
      {
        name: "collapsible",
        attr: "collapsible",
        type: "boolean",
        default: "false",
        description: "Allow items with children to be collapsed"
      },
      {
        name: "defaultExpanded",
        attr: "default-expanded",
        type: "boolean",
        default: "true",
        description: "Expand all collapsible items by default"
      },
      {
        name: "indicator",
        attr: "indicator",
        type: "\"default\" | \"dot\" | \"icon\" | \"line\"",
        default: "'line'",
        description: "Indicator type: 'line' or 'dot'",
        options: [
          "default",
          "dot",
          "icon",
          "line"
        ]
      },
      {
        name: "items",
        attr: "items",
        type: "AnchorItem[] | string",
        default: "[]",
        description: "Array of anchor items or JSON string. Replaces old `links` prop."
      },
      {
        name: "links",
        attr: "links",
        type: "string",
        default: "''",
        description: "Backward-compatible JSON string prop (same as items)"
      },
      {
        name: "loadIcons",
        attr: "load-icons",
        type: "boolean",
        default: "true",
        description: "Auto-load FontAwesome icons"
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "Orientation / mode: Orientation",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "numberStyle",
        attr: "number-style",
        type: "\"alpha\" | \"decimal\" | \"numeric\" | \"roman\"",
        default: "'numeric'",
        description: "Style of numbers shown",
        options: [
          "alpha",
          "decimal",
          "numeric",
          "roman"
        ]
      },
      {
        name: "observerRootMargin",
        attr: "observer-root-margin",
        type: "string",
        default: "''",
        description: "Custom IntersectionObserver rootMargin"
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "Alias for mode",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'left'",
        description: "Position when sticky",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "routerNavigate",
        attr: "router-navigate",
        type: "boolean",
        default: "false",
        description: "Emit navigate event instead of browser navigation"
      },
      {
        name: "scrollContainer",
        attr: "scroll-container",
        type: "string",
        default: "''",
        description: "CSS selector of scrollable container. Defaults to window."
      },
      {
        name: "scrollOffset",
        attr: "scroll-offset",
        type: "number",
        default: "80",
        description: "Offset from top when scrolling to section"
      },
      {
        name: "showIndicator",
        attr: "show-indicator",
        type: "boolean",
        default: "true",
        description: "Show active indicator line/dot"
      },
      {
        name: "showNumbers",
        attr: "show-numbers",
        type: "boolean",
        default: "false",
        description: "Show numeric/alpha/roman numbering"
      },
      {
        name: "showProgress",
        attr: "show-progress",
        type: "boolean",
        default: "false",
        description: "Show scroll progress bar"
      },
      {
        name: "showTooltip",
        attr: "show-tooltip",
        type: "boolean",
        default: "false",
        description: "Show tooltip on hover"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size variant",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "smoothScroll",
        attr: "smooth-scroll",
        type: "boolean",
        default: "true",
        description: "Enable smooth scrolling behavior"
      },
      {
        name: "sticky",
        attr: "sticky",
        type: "boolean",
        default: "true",
        description: "Stick the component using CSS position:sticky"
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"auto\" | \"dark\" | \"default\" | \"green\" | \"light\"",
        default: "'light'",
        description: "Theme variant",
        options: [
          "auto",
          "dark",
          "default",
          "green",
          "light"
        ]
      },
      {
        name: "updateHash",
        attr: "update-hash",
        type: "boolean",
        default: "false",
        description: "Update URL hash on navigation"
      },
      {
        name: "useSlot",
        attr: "use-slot",
        type: "boolean",
        default: "false",
        description: "Use named slot per item instead of inline rendering"
      }
    ],
    events: [
      {
        name: "activeItemChange",
        detail: "{ id: string; label: string; }",
        description: ""
      },
      {
        name: "affixChange",
        detail: "boolean",
        description: ""
      },
      {
        name: "anchorClick",
        detail: "{ linkId: string; targetId: string; }",
        description: ""
      },
      {
        name: "anchorItemClick",
        detail: "{ id: string; label: string; }",
        description: ""
      },
      {
        name: "expandChange",
        detail: "{ id: string; expanded: boolean; }",
        description: ""
      },
      {
        name: "navigate",
        detail: "{ href: string; target?: string; rel?: string; }",
        description: ""
      },
      {
        name: "progressChange",
        detail: "number",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-anchor affix alignment=\"left\" collapsible></ui-anchor>",
      stencil: "<ui-anchor affix={true} alignment=\"left\" collapsible={true}></ui-anchor>",
      react: "export default function Example() {\n  return <ui-anchor affix alignment=\"left\" collapsible></ui-anchor>;\n}",
      angular: "<ui-anchor [affix]=\"true\" alignment=\"left\" [collapsible]=\"true\"></ui-anchor>",
      vue: "<template>\n  <UiAnchor :affix=\"true\" alignment=\"left\" :collapsible=\"true\"></UiAnchor>\n</template>"
    }
  },
  {
    id: "animate-on-scroll",
    name: "Animate On Scroll",
    tag: "ui-animate-on-scroll",
    category: "Utility",
    description: "Animate On Scroll web component (<ui-animate-on-scroll>).",
    totalProps: 18,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 204,
    color: "#34d399",
    props: [
      {
        name: "anchor",
        attr: "anchor",
        type: "string",
        default: "''",
        description: "CSS class or ID of the element to use as the scroll anchor"
      },
      {
        name: "blurAmount",
        attr: "blur-amount",
        type: "string",
        default: "''",
        description: "Blur amount for starting state (e.g. '5px') Renamed from 'blur' to avoid conflict with HTMLElement.blur()"
      },
      {
        name: "delay",
        attr: "delay",
        type: "number",
        default: "0",
        description: "Animation delay in milliseconds"
      },
      {
        name: "distance",
        attr: "distance",
        type: "string",
        default: "'50px'",
        description: "Distance for slide animations (e.g. '100px')"
      },
      {
        name: "duration",
        attr: "duration",
        type: "number",
        default: "1000",
        description: "Animation duration in milliseconds"
      },
      {
        name: "easing",
        attr: "easing",
        type: "string",
        default: "'ease'",
        description: "Animation easing function"
      },
      {
        name: "enterClass",
        attr: "enter-class",
        type: "\"bounce\" | \"expand\" | \"fade\" | \"fade-down\" | \"fade-in\" | \"fade-in-out\" | \"fade-left\" | \"fade-out\" | \"fade-right\" | \"fade-up\" | \"flip\" | \"flip-x\" | \"flip-y\" | \"float\" | \"none\" | \"pulse\" | \"ripple\" | \"rotate\" | \"scale\" | \"shake\" | \"shimmer\" | \"slide\" | \"slide-down\" | \"slide-in\" | \"slide-in-out\" | \"slide-left\" | \"slide-left-right\" | \"slide-out\" | \"slide-right\" | \"slide-up\" | \"slide-up-down\" | \"spin\" | \"spring\" | \"swing\" | \"wave\" | \"wobble\" | \"zoom\" | \"zoom-in\" | \"zoom-out\"",
        default: "'fade-in'",
        description: "CSS classes to apply when element enters viewport",
        options: [
          "bounce",
          "expand",
          "fade",
          "fade-down",
          "fade-in",
          "fade-in-out",
          "fade-left",
          "fade-out",
          "fade-right",
          "fade-up",
          "flip",
          "flip-x",
          "flip-y",
          "float",
          "none",
          "pulse",
          "ripple",
          "rotate",
          "scale",
          "shake",
          "shimmer",
          "slide",
          "slide-down",
          "slide-in",
          "slide-in-out",
          "slide-left",
          "slide-left-right",
          "slide-out",
          "slide-right",
          "slide-up",
          "slide-up-down",
          "spin",
          "spring",
          "swing",
          "wave",
          "wobble",
          "zoom",
          "zoom-in",
          "zoom-out"
        ]
      },
      {
        name: "leaveClass",
        attr: "leave-class",
        type: "string",
        default: "''",
        description: "CSS classes to apply when element leaves viewport"
      },
      {
        name: "mirror",
        attr: "mirror",
        type: "boolean",
        default: "false",
        description: "Whether to reset the animation when the element leaves the viewport in reverse (scrolling up)"
      },
      {
        name: "once",
        attr: "once",
        type: "boolean",
        default: "false",
        description: "Whether to animate only once or every time element enters viewport"
      },
      {
        name: "perspective",
        attr: "perspective",
        type: "string",
        default: "''",
        description: "3D Perspective value (e.g. '1000px')"
      },
      {
        name: "respectReducedMotion",
        attr: "respect-reduced-motion",
        type: "boolean",
        default: "true",
        description: "Whether to disable animations for users who prefer reduced motion"
      },
      {
        name: "root",
        attr: "root",
        type: "string",
        default: "''",
        description: "Selector for the root element (scroll container)"
      },
      {
        name: "rootMargin",
        attr: "root-margin",
        type: "string",
        default: "'0px'",
        description: "Root margin for intersection observer"
      },
      {
        name: "scrub",
        attr: "scrub",
        type: "boolean",
        default: "false",
        description: "Whether to scrub the animation based on scroll position (parallax effect)"
      },
      {
        name: "stagger",
        attr: "stagger",
        type: "number",
        default: "0",
        description: "Stagger delay per child in ms (if children exist)"
      },
      {
        name: "threshold",
        attr: "threshold",
        type: "number",
        default: "0.5",
        description: "Threshold for intersection observer (0-1)"
      },
      {
        name: "transformOrigin",
        attr: "transform-origin",
        type: "string",
        default: "'center'",
        description: "The transform origin for rotation/flip animations (e.g. 'top' or 'center')"
      }
    ],
    events: [
      {
        name: "scrollAnimationEnd",
        detail: "void",
        description: "Emitted when the animation ends"
      },
      {
        name: "scrollAnimationStart",
        detail: "void",
        description: "Emitted when the animation starts (element enters/interacts)"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-animate-on-scroll enter-class=\"fade-in\" mirror once></ui-animate-on-scroll>",
      stencil: "<ui-animate-on-scroll enter-class=\"fade-in\" mirror={true} once={true}></ui-animate-on-scroll>",
      react: "export default function Example() {\n  return <ui-animate-on-scroll enter-class=\"fade-in\" mirror once></ui-animate-on-scroll>;\n}",
      angular: "<ui-animate-on-scroll enter-class=\"fade-in\" [mirror]=\"true\" [once]=\"true\"></ui-animate-on-scroll>",
      vue: "<template>\n  <UiAnimateOnScroll enter-class=\"fade-in\" :mirror=\"true\" :once=\"true\"></UiAnimateOnScroll>\n</template>"
    }
  },
  {
    id: "aside-panel",
    name: "Aside Panel",
    tag: "ui-aside-panel",
    category: "Layout",
    description: "Aside Panel web component (<ui-aside-panel>).",
    totalProps: 40,
    totalEvents: 5,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 251,
    color: "#f472b6",
    props: [
      {
        name: "actionItems",
        attr: "action-items",
        type: "ContextMenuItem[] | string",
        default: "[]",
        description: "Array of items for the action menu (3-dot)"
      },
      {
        name: "animationType",
        attr: "animation-type",
        type: "\"bounce\" | \"expand\" | \"fade\" | \"fade-down\" | \"fade-in\" | \"fade-in-out\" | \"fade-left\" | \"fade-out\" | \"fade-right\" | \"fade-up\" | \"flip\" | \"flip-x\" | \"flip-y\" | \"float\" | \"none\" | \"pulse\" | \"ripple\" | \"rotate\" | \"scale\" | \"shake\" | \"shimmer\" | \"slide\" | \"slide-down\" | \"slide-in\" | \"slide-in-out\" | \"slide-left\" | \"slide-left-right\" | \"slide-out\" | \"slide-right\" | \"slide-up\" | \"slide-up-down\" | \"spin\" | \"spring\" | \"swing\" | \"wave\" | \"wobble\" | \"zoom\" | \"zoom-in\" | \"zoom-out\"",
        default: "'slide-in-out'",
        description: "Animation style for opening and closing",
        options: [
          "bounce",
          "expand",
          "fade",
          "fade-down",
          "fade-in",
          "fade-in-out",
          "fade-left",
          "fade-out",
          "fade-right",
          "fade-up",
          "flip",
          "flip-x",
          "flip-y",
          "float",
          "none",
          "pulse",
          "ripple",
          "rotate",
          "scale",
          "shake",
          "shimmer",
          "slide",
          "slide-down",
          "slide-in",
          "slide-in-out",
          "slide-left",
          "slide-left-right",
          "slide-out",
          "slide-right",
          "slide-up",
          "slide-up-down",
          "spin",
          "spring",
          "swing",
          "wave",
          "wobble",
          "zoom",
          "zoom-in",
          "zoom-out"
        ]
      },
      {
        name: "autoMini",
        attr: "auto-mini",
        type: "boolean",
        default: "true",
        description: "Whether the panel should automatically enter 'Mini' mode on sm screens"
      },
      {
        name: "backdropBlur",
        attr: "backdrop-blur",
        type: "string",
        default: "'0'",
        description: "Backdrop blur amount (e.g., '8px')"
      },
      {
        name: "backgroundColor",
        attr: "background-color",
        type: "string",
        default: "'white'",
        description: "Background color of the panel"
      },
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "\"\"",
        description: "Status badge label for the header"
      },
      {
        name: "closeOnEscape",
        attr: "close-on-escape",
        type: "boolean",
        default: "true",
        description: "Whether the panel can be closed by pressing Escape key"
      },
      {
        name: "closeOnOverlayClick",
        attr: "close-on-overlay-click",
        type: "boolean",
        default: "true",
        description: "Whether clicking the overlay closes the panel"
      },
      {
        name: "closeable",
        attr: "closeable",
        type: "boolean",
        default: "true",
        description: "Whether to show the close button"
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'right'",
        description: "Direction from which the panel slides in: 'left', 'right', 'top', 'bottom'",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "enableParallax",
        attr: "enable-parallax",
        type: "boolean",
        default: "false",
        description: "Enable 3D Parallax tilt effect on content"
      },
      {
        name: "enableVoiceControl",
        attr: "enable-voice-control",
        type: "boolean",
        default: "false",
        description: "Voice-Activated navigation (Hands-Free)"
      },
      {
        name: "floatingAlign",
        attr: "floating-align",
        type: "\"center\" | \"end\" | \"justify\" | \"start\" | \"stretch\"",
        default: "'stretch'",
        description: "Alignment along the secondary axis for 'floating' variant",
        options: [
          "center",
          "end",
          "justify",
          "start",
          "stretch"
        ]
      },
      {
        name: "floatingOffset",
        attr: "floating-offset",
        type: "string",
        default: "'20px'",
        description: "Offset from the screen edge for 'floating' variant (e.g., '20px')"
      },
      {
        name: "haptic",
        attr: "haptic",
        type: "boolean",
        default: "false",
        description: "Enable auditory haptics (Industrial click sounds)"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Whether the panel is in a loading state"
      },
      {
        name: "maxSize",
        attr: "max-size",
        type: "number",
        default: "1200",
        description: "Maximum size (width or height) in pixels"
      },
      {
        name: "maximized",
        attr: "maximized",
        type: "boolean",
        default: "false",
        description: "Whether the panel is in 'Maximized' (Full Screen) mode"
      },
      {
        name: "minSize",
        attr: "min-size",
        type: "number",
        default: "200",
        description: "Minimum size (width or height) in pixels"
      },
      {
        name: "mini",
        attr: "mini",
        type: "boolean",
        default: "false",
        description: "Enable 'Mini' mode (collapsed into a thin icon-bar)"
      },
      {
        name: "miniSize",
        attr: "mini-size",
        type: "string",
        default: "'64px'",
        description: "Width/Height of the panel in its 'Mini' state"
      },
      {
        name: "open",
        attr: "open",
        type: "boolean",
        default: "false",
        description: "Whether the aside panel is open"
      },
      {
        name: "persistKey",
        attr: "persist-key",
        type: "string",
        default: "",
        description: "Key to persist the panel's open state and size in localStorage"
      },
      {
        name: "pinned",
        attr: "pinned",
        type: "boolean",
        default: "false",
        description: "Prevent closing via overlay or escape (Locked state)"
      },
      {
        name: "progress",
        attr: "progress",
        type: "number",
        default: "-1",
        description: "Diagnostic progress bar percentage (0-100, -1 to hide)"
      },
      {
        name: "resizable",
        attr: "resizable",
        type: "boolean",
        default: "false",
        description: "Whether the panel is resizable"
      },
      {
        name: "resizeHandleColor",
        attr: "resize-handle-color",
        type: "string",
        default: "''",
        description: "Color of the resize handle (e.g. '#3bf673')"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "Whether to enable Right-to-Left (RTL) mode"
      },
      {
        name: "scope",
        attr: "scope",
        type: "string",
        default: "'body'",
        description: ""
      },
      {
        name: "secondarySize",
        attr: "secondary-size",
        type: "string",
        default: "'auto'",
        description: "Secondary dimension size for 'floating' variant (height if left/right, width if top/bottom) If 'auto', it stretches to the full viewport minus offsets."
      },
      {
        name: "showActions",
        attr: "show-actions",
        type: "boolean",
        default: "false",
        description: "Whether to show the 3-dot action menu button in the toolbar"
      },
      {
        name: "showOverlay",
        attr: "show-overlay",
        type: "boolean",
        default: "false",
        description: "Whether to show the background overlay"
      },
      {
        name: "showResizeIndicator",
        attr: "show-resize-indicator",
        type: "boolean",
        default: "true",
        description: "Whether to show a visual indicator on the resize handle"
      },
      {
        name: "size",
        attr: "size",
        type: "string",
        default: "'320px'",
        description: "Width of the panel (for left/right) or height (for top/bottom)"
      },
      {
        name: "stackOffset",
        attr: "stack-offset",
        type: "number",
        default: "0",
        description: "Stagger offset for multi-instance layouts (pixels)"
      },
      {
        name: "syncGroup",
        attr: "sync-group",
        type: "string",
        default: "''",
        description: "Sync group ID for broadcasting state across instances"
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"default\" | \"glass\" | \"none\" | \"radiant\" | \"zenith\"",
        default: "'default'",
        description: "Visual theme: 'default' | 'glass' | 'radiant' | 'zenith'",
        options: [
          "default",
          "glass",
          "none",
          "radiant",
          "zenith"
        ]
      },
      {
        name: "toggleShortcut",
        attr: "toggle-shortcut",
        type: "string",
        default: "''",
        description: "Global shortcut key to toggle the panel (requires Ctrl key, e.g. 'B')"
      },
      {
        name: "transitionDuration",
        attr: "transition-duration",
        type: "string",
        default: "'0.3s'",
        description: "Animation transition duration (e.g. '0.3s' or '500ms')"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"floating\" | \"glass\" | \"none\"",
        default: "'default'",
        description: "Legacy variant support (maps to theme if set)",
        options: [
          "default",
          "floating",
          "glass",
          "none"
        ]
      }
    ],
    events: [
      {
        name: "asideActionClick",
        detail: "void",
        description: "Event emitted when the 3-dot action menu is clicked"
      },
      {
        name: "asideClosed",
        detail: "void",
        description: "Event emitted when the panel is closed"
      },
      {
        name: "asideOpened",
        detail: "void",
        description: "Event emitted when the panel is opened"
      },
      {
        name: "asideResized",
        detail: "{ size: number; }",
        description: "Event emitted when the panel is resized"
      },
      {
        name: "asideStateChange",
        detail: "{ open: boolean; mini: boolean; }",
        description: "Event emitted when the state (open/mini) changes"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-aside-panel animation-type=\"slide-in-out\" direction=\"right\" enable-parallax></ui-aside-panel>",
      stencil: "<ui-aside-panel animation-type=\"slide-in-out\" direction=\"right\" enableParallax={true}></ui-aside-panel>",
      react: "export default function Example() {\n  return <ui-aside-panel animation-type=\"slide-in-out\" direction=\"right\" enableParallax></ui-aside-panel>;\n}",
      angular: "<ui-aside-panel animation-type=\"slide-in-out\" direction=\"right\" [enableParallax]=\"true\"></ui-aside-panel>",
      vue: "<template>\n  <UiAsidePanel animation-type=\"slide-in-out\" direction=\"right\" :enable-parallax=\"true\"></UiAsidePanel>\n</template>"
    }
  },
  {
    id: "avatar-group",
    name: "Avatar Group",
    tag: "ui-avatar-group",
    category: "Data Display",
    description: "Avatar Group web component (<ui-avatar-group>).",
    totalProps: 12,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 345,
    color: "#fb7185",
    props: [
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: "Enable animated shifting transitions on hover"
      },
      {
        name: "avatars",
        type: "AvatarProps[]",
        default: "[]",
        description: "Array of avatar props for dynamic generation"
      },
      {
        name: "borderColor",
        attr: "border-color",
        type: "string",
        default: "'white'",
        description: "Border color for avatars in the group"
      },
      {
        name: "borderWidth",
        attr: "border-width",
        type: "number",
        default: "2",
        description: "Border width for avatars in the group"
      },
      {
        name: "enablePopover",
        attr: "enable-popover",
        type: "boolean",
        default: "true",
        description: "Enable popover to show all avatars when hovering over excess count"
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"grid\" | \"stack\"",
        default: "'stack'",
        description: "Layout mode: 'stack' or 'grid'",
        options: [
          "grid",
          "stack"
        ]
      },
      {
        name: "max",
        attr: "max",
        type: "number | { count?: number; style?: any; popover?: any; }",
        default: "null",
        description: "Maximum config: number or object { count, style, popover }"
      },
      {
        name: "maxVisible",
        attr: "max-visible",
        type: "number",
        default: "5",
        description: "Maximum number of avatars to display before grouping"
      },
      {
        name: "overlap",
        attr: "overlap",
        type: "number",
        default: "null",
        description: "Overlapping amount (negative value for overlap)"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"hexagon\" | \"square\" | \"squircle\"",
        default: "'circle'",
        description: "Shape to apply to all avatars in the group",
        options: [
          "circle",
          "hexagon",
          "square",
          "squircle"
        ]
      },
      {
        name: "size",
        attr: "size",
        type: "number | string",
        default: "'m'",
        description: "Size of avatars in the group"
      },
      {
        name: "spacing",
        attr: "spacing",
        type: "number",
        default: "4",
        description: "Spacing between avatars (in pixels) for grid mode"
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-avatar-group layout=\"stack\" shape=\"circle\"></ui-avatar-group>",
      stencil: "<ui-avatar-group layout=\"stack\" shape=\"circle\"></ui-avatar-group>",
      react: "export default function Example() {\n  return <ui-avatar-group layout=\"stack\" shape=\"circle\"></ui-avatar-group>;\n}",
      angular: "<ui-avatar-group layout=\"stack\" shape=\"circle\"></ui-avatar-group>",
      vue: "<template>\n  <UiAvatarGroup layout=\"stack\" shape=\"circle\"></UiAvatarGroup>\n</template>"
    }
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    tag: "ui-breadcrumb",
    category: "Navigation",
    description: "Breadcrumb web component (<ui-breadcrumb>).",
    totalProps: 12,
    totalEvents: 1,
    variantsCount: 38,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 79,
    color: "#818cf8",
    props: [
      {
        name: "baseUrl",
        attr: "base-url",
        type: "string",
        default: "''",
        description: "Optional base URL for structured data URLs (if relative)"
      },
      {
        name: "homeIcon",
        attr: "home-icon",
        type: "string",
        default: "'🏠'",
        description: "Home icon"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default Library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "items",
        attr: "items",
        type: "BreadcrumbItem[] | string",
        default: "[]",
        description: "Array of breadcrumb items"
      },
      {
        name: "maxItems",
        attr: "max-items",
        type: "number",
        default: "0",
        description: "Maximum number of items to display before collapsing"
      },
      {
        name: "separator",
        attr: "separator",
        type: "string",
        default: "'/'",
        description: "Separator between breadcrumb items"
      },
      {
        name: "separatorIcon",
        attr: "separator-icon",
        type: "string",
        default: "",
        description: "Custom separator icon (overrides separator text)"
      },
      {
        name: "separatorIconLibrary",
        attr: "separator-icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Library for separator icon",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "showHome",
        attr: "show-home",
        type: "boolean",
        default: "false",
        description: "Show home icon as first item"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size of breadcrumb items",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "structuredData",
        attr: "structured-data",
        type: "boolean",
        default: "false",
        description: "Enable JSON-LD Structured Data for SEO"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"pills\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'default'",
        description: "Visual variant of the breadcrumb",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "pills",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      }
    ],
    events: [
      {
        name: "breadcrumbClick",
        detail: "BreadcrumbItem",
        description: "Event emitted when a breadcrumb item is clicked"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-breadcrumb icon-library=\"default\" separator-icon-library=\"default\" show-home></ui-breadcrumb>",
      stencil: "<ui-breadcrumb icon-library=\"default\" separator-icon-library=\"default\" showHome={true}></ui-breadcrumb>",
      react: "export default function Example() {\n  return <ui-breadcrumb icon-library=\"default\" separator-icon-library=\"default\" showHome></ui-breadcrumb>;\n}",
      angular: "<ui-breadcrumb icon-library=\"default\" separator-icon-library=\"default\" [showHome]=\"true\"></ui-breadcrumb>",
      vue: "<template>\n  <UiBreadcrumb icon-library=\"default\" separator-icon-library=\"default\" :show-home=\"true\"></UiBreadcrumb>\n</template>"
    }
  },
  {
    id: "breadcrumb-item",
    name: "Breadcrumb Item",
    tag: "ui-breadcrumb-item",
    category: "Navigation",
    description: "Breadcrumb Item web component (<ui-breadcrumb-item>).",
    totalProps: 8,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 126,
    color: "#a855f7",
    props: [
      {
        name: "active",
        attr: "active",
        type: "boolean",
        default: "false",
        description: "Whether the item is the currently active page"
      },
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "",
        description: "Optional badge text to display next to the label"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the item is disabled"
      },
      {
        name: "href",
        attr: "href",
        type: "string",
        default: "",
        description: "Optional link for the breadcrumb item"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: "Optional icon for the breadcrumb item"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Icon library to use",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Label for the breadcrumb item"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size inherited from parent (set automatically)",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-breadcrumb-item active disabled icon-library=\"default\"></ui-breadcrumb-item>",
      stencil: "<ui-breadcrumb-item active={true} disabled={true} icon-library=\"default\"></ui-breadcrumb-item>",
      react: "export default function Example() {\n  return <ui-breadcrumb-item active disabled icon-library=\"default\"></ui-breadcrumb-item>;\n}",
      angular: "<ui-breadcrumb-item [active]=\"true\" [disabled]=\"true\" icon-library=\"default\"></ui-breadcrumb-item>",
      vue: "<template>\n  <UiBreadcrumbItem :active=\"true\" :disabled=\"true\" icon-library=\"default\"></UiBreadcrumbItem>\n</template>"
    }
  },
  {
    id: "button-toggle",
    name: "Button Toggle",
    tag: "ui-button-toggle",
    category: "Forms",
    description: "Button Toggle web component (<ui-button-toggle>).",
    totalProps: 25,
    totalEvents: 1,
    variantsCount: 1,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 220,
    color: "#34d399",
    props: [
      {
        name: "avatarAlt",
        attr: "avatar-alt",
        type: "string",
        default: "",
        description: "Avatar alt text"
      },
      {
        name: "avatarSrc",
        attr: "avatar-src",
        type: "string",
        default: "",
        description: "Avatar source"
      },
      {
        name: "color",
        attr: "color",
        type: "string | { from?: string; to?: string; }",
        default: "'primary'",
        description: "Color"
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "",
        description: "Description text"
      },
      {
        name: "descriptionPosition",
        attr: "description-position",
        type: "\"below\" | \"right\"",
        default: "'below'",
        description: "Description position",
        options: [
          "below",
          "right"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: "Full width"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: "Icon name"
      },
      {
        name: "iconLeft",
        attr: "icon-left",
        type: "string",
        default: "",
        description: "Icon on the left side (overrides icon when display-mode is both-sides)"
      },
      {
        name: "iconOnly",
        attr: "icon-only",
        type: "boolean",
        default: "false",
        description: "Show icon only (hide label)"
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'left'",
        description: "Icon position relative to label",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "iconRight",
        attr: "icon-right",
        type: "string",
        default: "",
        description: "Icon on the right side"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Display label"
      },
      {
        name: "library",
        attr: "library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'lucide'",
        description: "Icon library",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "''",
        description: "Form field name"
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: "Read-only state"
      },
      {
        name: "reveal",
        attr: "reveal",
        type: "\"fade-in\" | \"none\" | \"slide-up\" | \"zoom\"",
        default: "'none'",
        description: "Reveal animation",
        options: [
          "fade-in",
          "none",
          "slide-up",
          "zoom"
        ]
      },
      {
        name: "revealDelay",
        attr: "reveal-delay",
        type: "number",
        default: "0",
        description: "Reveal delay in ms"
      },
      {
        name: "selected",
        attr: "selected",
        type: "boolean",
        default: "false",
        description: "Whether this toggle is selected"
      },
      {
        name: "shape",
        attr: "shape",
        type: "string",
        default: "'rounded'",
        description: "Shape"
      },
      {
        name: "size",
        attr: "size",
        type: "string",
        default: "'md'",
        description: "Size"
      },
      {
        name: "status",
        attr: "status",
        type: "string",
        default: "",
        description: "Status indicator"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: "The value associated with this toggle"
      },
      {
        name: "variant",
        attr: "variant",
        type: "string",
        default: "'soft'",
        description: "Visual variant"
      }
    ],
    events: [
      {
        name: "buttonToggleChange",
        detail: "{ value: string; }",
        description: "Emitted when toggle is clicked"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-button-toggle description-position=\"below\" disabled full-width></ui-button-toggle>",
      stencil: "<ui-button-toggle description-position=\"below\" disabled={true} fullWidth={true}></ui-button-toggle>",
      react: "export default function Example() {\n  return <ui-button-toggle description-position=\"below\" disabled fullWidth></ui-button-toggle>;\n}",
      angular: "<ui-button-toggle description-position=\"below\" [disabled]=\"true\" [fullWidth]=\"true\"></ui-button-toggle>",
      vue: "<template>\n  <UiButtonToggle description-position=\"below\" :disabled=\"true\" :full-width=\"true\"></UiButtonToggle>\n</template>"
    }
  },
  {
    id: "button-toggle-group",
    name: "Button Toggle Group",
    tag: "ui-button-toggle-group",
    category: "Forms",
    description: "Button Toggle Group web component (<ui-button-toggle-group>).",
    totalProps: 41,
    totalEvents: 7,
    variantsCount: 1,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 267,
    color: "#f472b6",
    props: [
      {
        name: "advancedTheme",
        attr: "advanced-theme",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "analyticsEnabled",
        attr: "analytics-enabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "batchActions",
        attr: "batch-actions",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "buttonAction",
        type: "() => void",
        default: "",
        description: ""
      },
      {
        name: "buttonActionLabel",
        attr: "button-action-label",
        type: "string",
        default: "'Action'",
        description: ""
      },
      {
        name: "color",
        attr: "color",
        type: "string | { from?: string; to?: string; }",
        default: "'primary'",
        description: "Visual color (string or {from: string, to: string})"
      },
      {
        name: "customContent",
        attr: "custom-content",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "errorMessage",
        attr: "error-message",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "exportEnabled",
        attr: "export-enabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconOnly",
        attr: "icon-only",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'left'",
        description: "",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "importEnabled",
        attr: "import-enabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "keepButtonLabel",
        attr: "keep-button-label",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "library",
        attr: "library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "",
        description: "",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "magneticIndicator",
        attr: "magnetic-indicator",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Indicator follows cursor slightly when near selection"
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"dropdown\" | \"segmented\"",
        default: "'segmented'",
        description: "",
        options: [
          "dropdown",
          "segmented"
        ]
      },
      {
        name: "multiSelect",
        attr: "multi-select",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "options",
        attr: "options",
        type: "string | { value: string; label?: string; icon?: string; iconLeft?: string; iconRight?: string; disabled?: boolean; description?: string; descriptionPosition?: any; avatarSrc?: string; avatarAlt?: string; avatarStatus?: any; status?: any; iconLibrary?: any; }[]",
        default: "[]",
        description: ""
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "persistKey",
        attr: "persist-key",
        type: "string",
        default: "''",
        description: "localStorage key for persisting selected value across reloads. Empty string disables persistence."
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "reveal",
        attr: "reveal",
        type: "\"fade-in\" | \"none\" | \"slide-up\" | \"zoom\"",
        default: "'none'",
        description: "Entrance animation",
        options: [
          "fade-in",
          "none",
          "slide-up",
          "zoom"
        ]
      },
      {
        name: "revealDelay",
        attr: "reveal-delay",
        type: "number",
        default: "0",
        description: "Base delay for group reveal"
      },
      {
        name: "revealStagger",
        attr: "reveal-stagger",
        type: "number",
        default: "50",
        description: "Stagger delay between items"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "searchEnabled",
        attr: "search-enabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "shape",
        attr: "shape",
        type: "any",
        default: "'rounded'",
        description: "Button shape (rounded, pill, chip, etc)"
      },
      {
        name: "size",
        attr: "size",
        type: "any",
        default: "'md'",
        description: "Size category (xxxs to xxxl)"
      },
      {
        name: "value",
        attr: "value",
        type: "string | string[]",
        default: "''",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "any",
        default: "'soft'",
        description: "Visual variant (glass, raised, etc)"
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "wrap",
        attr: "wrap",
        type: "boolean",
        default: "false",
        description: "Allow buttons to wrap to new lines"
      }
    ],
    events: [
      {
        name: "buttonToggleGroupAction",
        detail: "{ value: string | string[]; }",
        description: ""
      },
      {
        name: "buttonToggleGroupAnalytics",
        detail: "any",
        description: ""
      },
      {
        name: "buttonToggleGroupBatch",
        detail: "{ values: string[]; }",
        description: ""
      },
      {
        name: "buttonToggleGroupChange",
        detail: "{ value: string | string[]; }",
        description: ""
      },
      {
        name: "buttonToggleGroupExport",
        detail: "{ values: string[]; }",
        description: ""
      },
      {
        name: "buttonToggleGroupImport",
        detail: "{ values: string[]; }",
        description: ""
      },
      {
        name: "buttonToggleGroupSearch",
        detail: "{ query: string; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-button-toggle-group analytics-enabled batch-actions custom-content></ui-button-toggle-group>",
      stencil: "<ui-button-toggle-group analyticsEnabled={true} batchActions={true} customContent={true}></ui-button-toggle-group>",
      react: "export default function Example() {\n  return <ui-button-toggle-group analyticsEnabled batchActions customContent></ui-button-toggle-group>;\n}",
      angular: "<ui-button-toggle-group [analyticsEnabled]=\"true\" [batchActions]=\"true\" [customContent]=\"true\"></ui-button-toggle-group>",
      vue: "<template>\n  <UiButtonToggleGroup :analytics-enabled=\"true\" :batch-actions=\"true\" :custom-content=\"true\"></UiButtonToggleGroup>\n</template>"
    }
  },
  {
    id: "callout-banner",
    name: "Callout Banner",
    tag: "ui-callout-banner",
    category: "Feedback",
    description: "Callout Banner web component (<ui-callout-banner>).",
    totalProps: 32,
    totalEvents: 3,
    variantsCount: 24,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 314,
    color: "#fbbf24",
    props: [
      {
        name: "accentBar",
        attr: "accent-bar",
        type: "boolean",
        default: "false",
        description: "Add a coloured left-border accent bar (VS Code–style)"
      },
      {
        name: "ariaRole",
        attr: "aria-role",
        type: "string",
        default: "",
        description: "Custom ARIA role override (default: alert/status)"
      },
      {
        name: "autoClose",
        attr: "auto-close",
        type: "number",
        default: "0",
        description: "Auto-dismiss after this many milliseconds (0 = disabled)"
      },
      {
        name: "banner",
        attr: "banner",
        type: "boolean",
        default: "false",
        description: "Full-width top-of-page banner mode (removes border-radius, adds bottom border)"
      },
      {
        name: "closable",
        attr: "closable",
        type: "boolean",
        default: "true",
        description: "Show the close button and allow dismissal"
      },
      {
        name: "closableAfter",
        attr: "closable-after",
        type: "number",
        default: "0",
        description: "Delay before close button appears (ms)"
      },
      {
        name: "compact",
        attr: "compact",
        type: "boolean",
        default: "false",
        description: "Compact single-line layout"
      },
      {
        name: "dismissLabel",
        attr: "dismiss-label",
        type: "string",
        default: "'Dismiss'",
        description: "Accessible label for the dismiss action"
      },
      {
        name: "enterFrom",
        attr: "enter-from",
        type: "\"bottom\" | \"fade\" | \"left\" | \"right\" | \"top\"",
        default: "'top'",
        description: "Slide/fade-in direction for entrance animation",
        options: [
          "bottom",
          "fade",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "focusOnShow",
        attr: "focus-on-show",
        type: "boolean",
        default: "false",
        description: "Auto-focus the close button or banner when shown"
      },
      {
        name: "heading",
        attr: "heading",
        type: "string",
        default: "",
        description: "Optional heading text when no `slot=\"title\"` is provided"
      },
      {
        name: "href",
        attr: "href",
        type: "string",
        default: "",
        description: "Make the callout clickable as a link"
      },
      {
        name: "i18n",
        type: "{ [key: string]: string; dismissLabel?: string; showMoreLabel?: string; showLessLabel?: string; loadingLabel?: string; }",
        default: "",
        description: "i18n/localization: override all labels/messages"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: "Optional icon glyph name; falls back to slot content if provided"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'lucide'",
        description: "Icon library used when the `icon` prop is set",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Show a loading spinner in place of the icon and set aria-busy on the host"
      },
      {
        name: "marquee",
        attr: "marquee",
        type: "boolean",
        default: "false",
        description: "Scroll the message in an infinite marquee/ticker loop"
      },
      {
        name: "marqueeSpeed",
        attr: "marquee-speed",
        type: "number",
        default: "18",
        description: "Duration (seconds) for one full marquee loop. Lower = faster. Default 18."
      },
      {
        name: "message",
        attr: "message",
        type: "string",
        default: "",
        description: "Optional message text when default slot is empty"
      },
      {
        name: "noIcon",
        attr: "no-icon",
        type: "boolean",
        default: "false",
        description: "Hide the icon column entirely"
      },
      {
        name: "outlined",
        attr: "outlined",
        type: "boolean",
        default: "false",
        description: "Outline style instead of full background"
      },
      {
        name: "pauseOnHover",
        attr: "pause-on-hover",
        type: "boolean",
        default: "false",
        description: "Pause the auto-close timer while the user hovers over the banner"
      },
      {
        name: "persistKey",
        attr: "persist-key",
        type: "string",
        default: "",
        description: "Persistence key to remember dismissal via localStorage"
      },
      {
        name: "progress",
        attr: "progress",
        type: "number",
        default: "",
        description: "Progress value (0-100) for banners that show progress"
      },
      {
        name: "pulse",
        attr: "pulse",
        type: "boolean",
        default: "false",
        description: "Animate the callout with a pulsing ring to draw attention"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size scale: sm, md, lg",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "solid",
        attr: "solid",
        type: "boolean",
        default: "false",
        description: "Bold, fully-saturated background for high-emphasis notices"
      },
      {
        name: "sticky",
        attr: "sticky",
        type: "boolean",
        default: "false",
        description: "Stick the banner to the top of its scroll container"
      },
      {
        name: "target",
        attr: "target",
        type: "string",
        default: "",
        description: "Target for the link (if href is set)"
      },
      {
        name: "testId",
        attr: "test-id",
        type: "string",
        default: "",
        description: "Test ID for automated testing selectors"
      },
      {
        name: "truncate",
        attr: "truncate",
        type: "number",
        default: "0",
        description: "Clamp the message to N lines with a Show more/less toggle (0 = off)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'info'",
        description: "Visual variant that drives accent colors and icon",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      }
    ],
    events: [
      {
        name: "calloutAction",
        detail: "void",
        description: "Fired when an action in the slot is clicked"
      },
      {
        name: "calloutDismiss",
        detail: "void",
        description: "Fired when the banner is dismissed"
      },
      {
        name: "calloutShow",
        detail: "void",
        description: "Fired when the banner is shown via the show() method"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-callout-banner accent-bar banner compact></ui-callout-banner>",
      stencil: "<ui-callout-banner accentBar={true} banner={true} compact={true}></ui-callout-banner>",
      react: "export default function Example() {\n  return <ui-callout-banner accentBar banner compact></ui-callout-banner>;\n}",
      angular: "<ui-callout-banner [accentBar]=\"true\" [banner]=\"true\" [compact]=\"true\"></ui-callout-banner>",
      vue: "<template>\n  <UiCalloutBanner :accent-bar=\"true\" :banner=\"true\" :compact=\"true\"></UiCalloutBanner>\n</template>"
    }
  },
  {
    id: "carousel",
    name: "Carousel",
    tag: "ui-carousel",
    category: "Data Display",
    description: "Carousel Component Features: responsive, auto/manual scroll, vertical/horizontal, infinite, touch, keyboard, indicators, arrows, slots",
    totalProps: 39,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 48,
    color: "#38bdf8",
    props: [
      {
        name: "animateContent",
        attr: "animate-content",
        type: "boolean",
        default: "false",
        description: "Staggered animations for elements inside the active slide (e.g. titles, buttons)"
      },
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "500",
        description: "Animation duration (ms)"
      },
      {
        name: "animationEasing",
        attr: "animation-easing",
        type: "string",
        default: "'cubic-bezier(0.4,0,0.2,1)'",
        description: "Animation easing function"
      },
      {
        name: "arrows",
        attr: "arrows",
        type: "boolean",
        default: "true",
        description: "Show navigation arrows"
      },
      {
        name: "arrowsPosition",
        attr: "arrows-position",
        type: "\"sides\" | \"top-right\"",
        default: "'sides'",
        description: "Position of navigation arrows",
        options: [
          "sides",
          "top-right"
        ]
      },
      {
        name: "asNavFor",
        attr: "as-nav-for",
        type: "string",
        default: "''",
        description: "Selector of another carousel to sync with (e.g., '#thumbSlider')"
      },
      {
        name: "autoHeight",
        attr: "auto-height",
        type: "boolean",
        default: "false",
        description: "Enable auto-height (adjusts to content)"
      },
      {
        name: "autoplay",
        attr: "autoplay",
        type: "boolean",
        default: "false",
        description: "Enable autoplay"
      },
      {
        name: "autoplayInterval",
        attr: "autoplay-interval",
        type: "number",
        default: "3000",
        description: "Autoplay interval (ms)"
      },
      {
        name: "centerMode",
        attr: "center-mode",
        type: "boolean",
        default: "false",
        description: "Enable center mode"
      },
      {
        name: "centerPadding",
        attr: "center-padding",
        type: "string",
        default: "'50px'",
        description: "Padding for center mode (e.g., '50px')"
      },
      {
        name: "effect",
        attr: "effect",
        type: "\"coverflow\" | \"cube\" | \"depth\" | \"fade\" | \"flip\" | \"ken-burns\" | \"scale\" | \"slide\" | \"stack\" | \"wheel\"",
        default: "'slide'",
        description: "Transition effect",
        options: [
          "coverflow",
          "cube",
          "depth",
          "fade",
          "flip",
          "ken-burns",
          "scale",
          "slide",
          "stack",
          "wheel"
        ]
      },
      {
        name: "enableDrag",
        attr: "enable-drag",
        type: "boolean",
        default: "true",
        description: "Enable mouse dragging"
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "'400px'",
        description: "Carousel height"
      },
      {
        name: "indicators",
        attr: "indicators",
        type: "boolean",
        default: "true",
        description: "Show indicators (dots)"
      },
      {
        name: "indicatorsType",
        attr: "indicators-type",
        type: "\"default\" | \"dots\" | \"icon\" | \"line\" | \"pie\" | \"segments\"",
        default: "'dots'",
        description: "Type of navigation indicators: 'dots', 'segments' (stories-style), or 'pie' (circular)",
        options: [
          "default",
          "dots",
          "icon",
          "line",
          "pie",
          "segments"
        ]
      },
      {
        name: "infinite",
        attr: "infinite",
        type: "boolean",
        default: "true",
        description: "Enable infinite looping"
      },
      {
        name: "keyboard",
        attr: "keyboard",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation"
      },
      {
        name: "lazyLoad",
        attr: "lazy-load",
        type: "boolean",
        default: "false",
        description: "Enable lazy loading of images inside slides"
      },
      {
        name: "loop",
        attr: "loop",
        type: "boolean",
        default: "true",
        description: "Disable infinite looping"
      },
      {
        name: "mouseWheel",
        attr: "mouse-wheel",
        type: "boolean",
        default: "false",
        description: "Enable mouse wheel navigation"
      },
      {
        name: "nextArrow",
        attr: "next-arrow",
        type: "string",
        default: "'&gt;'",
        description: "Custom next arrow template"
      },
      {
        name: "parallax",
        attr: "parallax",
        type: "boolean",
        default: "false",
        description: "Enable parallax effect for slide content"
      },
      {
        name: "pauseOnHover",
        attr: "pause-on-hover",
        type: "boolean",
        default: "true",
        description: "Pause autoplay on hover"
      },
      {
        name: "pauseOnInteract",
        attr: "pause-on-interact",
        type: "boolean",
        default: "true",
        description: "Pause on interaction (clicks/drags)"
      },
      {
        name: "prevArrow",
        attr: "prev-arrow",
        type: "string",
        default: "'&lt;'",
        description: "Custom previous arrow template"
      },
      {
        name: "responsive",
        attr: "responsive",
        type: "string",
        default: "''",
        description: "Responsive breakpoints"
      },
      {
        name: "showCounter",
        attr: "show-counter",
        type: "boolean",
        default: "false",
        description: "Show slide counter (e.g. 1/10)"
      },
      {
        name: "showProgress",
        attr: "show-progress",
        type: "boolean",
        default: "false",
        description: "Show autoplay progress bar"
      },
      {
        name: "slidesToScroll",
        attr: "slides-to-scroll",
        type: "number",
        default: "1",
        description: "Slides to scroll per action"
      },
      {
        name: "slidesToShow",
        attr: "slides-to-show",
        type: "number",
        default: "1",
        description: "Slides to show at once (responsive)"
      },
      {
        name: "swipe",
        attr: "swipe",
        type: "boolean",
        default: "true",
        description: "Enable swipe/touch"
      },
      {
        name: "ticker",
        attr: "ticker",
        type: "boolean",
        default: "false",
        description: "Enable continuous 'Ticker' mode (smooth scrolling without pauses)"
      },
      {
        name: "tickerSpeed",
        attr: "ticker-speed",
        type: "number",
        default: "1",
        description: "Speed for ticker mode (pixels per frame, approx 1-3 for smooth motion)"
      },
      {
        name: "useProgressSegments",
        attr: "use-progress-segments",
        type: "boolean",
        default: "false",
        description: "Use stories-style progress indicators (segments) - DEPRECATED: use indicatorsType='segments' instead"
      },
      {
        name: "variableWidth",
        attr: "variable-width",
        type: "boolean",
        default: "false",
        description: "Enable variable width slides"
      },
      {
        name: "vertical",
        attr: "vertical",
        type: "boolean",
        default: "false",
        description: "Vertical mode"
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "'100%'",
        description: "Carousel width"
      },
      {
        name: "zoomActive",
        attr: "zoom-active",
        type: "boolean",
        default: "false",
        description: "Zoom effect on the active slide (Center Mode recommended)"
      }
    ],
    events: [
      {
        name: "afterChange",
        detail: "{ current: number; }",
        description: ""
      },
      {
        name: "beforeChange",
        detail: "{ from: number; to: number; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-carousel animate-content arrows-position=\"sides\" auto-height></ui-carousel>",
      stencil: "<ui-carousel animateContent={true} arrows-position=\"sides\" autoHeight={true}></ui-carousel>",
      react: "export default function Example() {\n  return <ui-carousel animateContent arrows-position=\"sides\" autoHeight></ui-carousel>;\n}",
      angular: "<ui-carousel [animateContent]=\"true\" arrows-position=\"sides\" [autoHeight]=\"true\"></ui-carousel>",
      vue: "<template>\n  <UiCarousel :animate-content=\"true\" arrows-position=\"sides\" :auto-height=\"true\"></UiCarousel>\n</template>"
    }
  },
  {
    id: "code-editor",
    name: "Code Editor",
    tag: "ui-code-editor",
    category: "Data Display",
    description: "Code Editor web component (<ui-code-editor>).",
    totalProps: 9,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 142,
    color: "#a855f7",
    props: [
      {
        name: "language",
        attr: "language",
        type: "\"csharp\" | \"css\" | \"html\" | \"java\" | \"javascript\" | \"json\" | \"ladder\" | \"markdown\" | \"python\"",
        default: "'javascript'",
        description: "",
        options: [
          "csharp",
          "css",
          "html",
          "java",
          "javascript",
          "json",
          "ladder",
          "markdown",
          "python"
        ]
      },
      {
        name: "lineNumbers",
        attr: "line-numbers",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "tabs",
        type: "{ title: string; language: string; content: string; }[]",
        default: "[]",
        description: ""
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"vs-dark\" | \"vs-light\"",
        default: "'vs-dark'",
        description: "",
        options: [
          "vs-dark",
          "vs-light"
        ]
      },
      {
        name: "toolbar",
        attr: "toolbar",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "toolbarGroups",
        type: "string[]",
        default: "['all']",
        description: ""
      },
      {
        name: "toolbarLabelDisplay",
        attr: "toolbar-label-display",
        type: "\"always\" | \"hidden\" | \"hover\"",
        default: "'hover'",
        description: "",
        options: [
          "always",
          "hidden",
          "hover"
        ]
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: ""
      }
    ],
    events: [
      {
        name: "runCode",
        detail: "void",
        description: ""
      },
      {
        name: "valueChange",
        detail: "string",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-code-editor language=\"javascript\" readonly theme=\"vs-dark\"></ui-code-editor>",
      stencil: "<ui-code-editor language=\"javascript\" readonly={true} theme=\"vs-dark\"></ui-code-editor>",
      react: "export default function Example() {\n  return <ui-code-editor language=\"javascript\" readonly theme=\"vs-dark\"></ui-code-editor>;\n}",
      angular: "<ui-code-editor language=\"javascript\" [readonly]=\"true\" theme=\"vs-dark\"></ui-code-editor>",
      vue: "<template>\n  <UiCodeEditor language=\"javascript\" :readonly=\"true\" theme=\"vs-dark\"></UiCodeEditor>\n</template>"
    }
  },
  {
    id: "code-preview",
    name: "Code Preview",
    tag: "ui-code-preview",
    category: "Data Display",
    description: "Code Preview web component (<ui-code-preview>).",
    totalProps: 9,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 189,
    color: "#22d3ee",
    props: [
      {
        name: "activeLang",
        attr: "active-lang",
        type: "string",
        default: "''",
        description: "Current active language tab"
      },
      {
        name: "cssCode",
        attr: "css-code",
        type: "string",
        default: "''",
        description: "The CSS code to display (Legacy)"
      },
      {
        name: "expanded",
        attr: "expanded",
        type: "boolean",
        default: "true",
        description: "Whether the code block is expanded or collapsed"
      },
      {
        name: "htmlCode",
        attr: "html-code",
        type: "string",
        default: "''",
        description: "The HTML code to display (Legacy)"
      },
      {
        name: "jsCode",
        attr: "js-code",
        type: "string",
        default: "''",
        description: "The JavaScript/JSX code to display (Legacy)"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label for the code block (optional)"
      },
      {
        name: "showReset",
        attr: "show-reset",
        type: "boolean",
        default: "false",
        description: "Whether to show the reset button"
      },
      {
        name: "snippets",
        attr: "snippets",
        type: "CodeSnippet[] | string",
        default: "[]",
        description: "Array of code snippets to display. Can be a JSON string or an array of { language, code, label? } objects. Supports any language supported by PrismJS (e.g., 'python', 'java', 'csharp', 'json')."
      },
      {
        name: "tsCode",
        attr: "ts-code",
        type: "string",
        default: "''",
        description: "The TypeScript/TSX code to display (Legacy)"
      }
    ],
    events: [
      {
        name: "expandedChange",
        detail: "boolean",
        description: "Emitted when expansion state changes"
      },
      {
        name: "uiReset",
        detail: "void",
        description: "Emitted when the reset button is clicked"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-code-preview show-reset></ui-code-preview>",
      stencil: "<ui-code-preview showReset={true}></ui-code-preview>",
      react: "export default function Example() {\n  return <ui-code-preview showReset></ui-code-preview>;\n}",
      angular: "<ui-code-preview [showReset]=\"true\"></ui-code-preview>",
      vue: "<template>\n  <UiCodePreview :show-reset=\"true\"></UiCodePreview>\n</template>"
    }
  },
  {
    id: "color-controller",
    name: "Color Controller",
    tag: "ui-color-controller",
    category: "Forms",
    description: "Color Controller web component (<ui-color-controller>).",
    totalProps: 2,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 236,
    color: "#34d399",
    props: [
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label for the entire group"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "'#10b981'",
        description: "Current color as a hex string"
      }
    ],
    events: [
      {
        name: "colorChange",
        detail: "string",
        description: "Emitted when any color channel changes"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-color-controller></ui-color-controller>",
      stencil: "<ui-color-controller></ui-color-controller>",
      react: "export default function Example() {\n  return <ui-color-controller></ui-color-controller>;\n}",
      angular: "<ui-color-controller></ui-color-controller>",
      vue: "<template>\n  <UiColorController></UiColorController>\n</template>"
    }
  },
  {
    id: "color-picker",
    name: "Color Picker",
    tag: "ui-color-picker",
    category: "Forms",
    description: "Color Picker web component (<ui-color-picker>).",
    totalProps: 21,
    totalEvents: 1,
    variantsCount: 3,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 283,
    color: "#f472b6",
    props: [
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled"
      },
      {
        name: "format",
        attr: "format",
        type: "\"hex\" | \"hsl\" | \"hsla\" | \"rgb\" | \"rgba\"",
        default: "'hex'",
        description: "Format: 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla'",
        options: [
          "hex",
          "hsl",
          "hsla",
          "rgb",
          "rgba"
        ]
      },
      {
        name: "inline",
        attr: "inline",
        type: "boolean",
        default: "false",
        description: "Show as inline (no trigger button)"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "''",
        description: "Form internal name"
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: "Required"
      },
      {
        name: "showAlpha",
        attr: "show-alpha",
        type: "boolean",
        default: "false",
        description: "Show alpha channel slider"
      },
      {
        name: "showColorName",
        attr: "show-color-name",
        type: "boolean",
        default: "true",
        description: "Show color name display"
      },
      {
        name: "showEyeDropper",
        attr: "show-eye-dropper",
        type: "boolean",
        default: "true",
        description: "Show eye dropper button (modern browsers only)"
      },
      {
        name: "showGradient",
        attr: "show-gradient",
        type: "boolean",
        default: "false",
        description: "Enable gradient mode"
      },
      {
        name: "showHex",
        attr: "show-hex",
        type: "boolean",
        default: "true",
        description: "Show hex input field"
      },
      {
        name: "showHsl",
        attr: "show-hsl",
        type: "boolean",
        default: "true",
        description: "Show HSL input field"
      },
      {
        name: "showHsla",
        attr: "show-hsla",
        type: "boolean",
        default: "true",
        description: "Show HSLA input field"
      },
      {
        name: "showRecent",
        attr: "show-recent",
        type: "boolean",
        default: "true",
        description: "Show recently picked colors history"
      },
      {
        name: "showRgb",
        attr: "show-rgb",
        type: "boolean",
        default: "true",
        description: "Show RGB input field"
      },
      {
        name: "showRgba",
        attr: "show-rgba",
        type: "boolean",
        default: "true",
        description: "Show RGBA input field"
      },
      {
        name: "showSwatches",
        attr: "show-swatches",
        type: "boolean",
        default: "true",
        description: "Show preset swatches"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "swatches",
        attr: "swatches",
        type: "string | string[]",
        default: "[]",
        description: "Custom swatches (hex strings)"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "'#3bf673'",
        description: "Current hex color value"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"hue\" | \"input\"",
        default: "'default'",
        description: "Display variant: full picker, hue slider only, or direct inputs",
        options: [
          "default",
          "hue",
          "input"
        ]
      }
    ],
    events: [
      {
        name: "colorChange",
        detail: "string",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-color-picker disabled format=\"hex\" inline></ui-color-picker>",
      stencil: "<ui-color-picker disabled={true} format=\"hex\" inline={true}></ui-color-picker>",
      react: "export default function Example() {\n  return <ui-color-picker disabled format=\"hex\" inline></ui-color-picker>;\n}",
      angular: "<ui-color-picker [disabled]=\"true\" format=\"hex\" [inline]=\"true\"></ui-color-picker>",
      vue: "<template>\n  <UiColorPicker :disabled=\"true\" format=\"hex\" :inline=\"true\"></UiColorPicker>\n</template>"
    }
  },
  {
    id: "command-palette",
    name: "Command Palette",
    tag: "ui-command-palette",
    category: "Navigation",
    description: "Command Palette web component (<ui-command-palette>).",
    totalProps: 7,
    totalEvents: 3,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 330,
    color: "#fbbf24",
    props: [
      {
        name: "commands",
        attr: "commands",
        type: "CommandItem[] | string",
        default: "[]",
        description: "List of commands"
      },
      {
        name: "maxVisible",
        attr: "max-visible",
        type: "number",
        default: "8",
        description: "Max visible items"
      },
      {
        name: "open",
        attr: "open",
        type: "boolean",
        default: "false",
        description: "Open state"
      },
      {
        name: "persistKey",
        attr: "persist-key",
        type: "string",
        default: "'ui-command-palette-recent'",
        description: "localStorage key for persisting recent commands (empty = no persistence)"
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "'Search commands…'",
        description: "Placeholder text"
      },
      {
        name: "shortcut",
        attr: "shortcut",
        type: "string",
        default: "'k'",
        description: "Keyboard shortcut to open (default: Meta+K)"
      },
      {
        name: "showRecent",
        attr: "show-recent",
        type: "boolean",
        default: "true",
        description: "Show recent items"
      }
    ],
    events: [
      {
        name: "commandSelect",
        detail: "CommandItem",
        description: ""
      },
      {
        name: "paletteClose",
        detail: "void",
        description: ""
      },
      {
        name: "paletteOpen",
        detail: "void",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-command-palette open></ui-command-palette>",
      stencil: "<ui-command-palette open={true}></ui-command-palette>",
      react: "export default function Example() {\n  return <ui-command-palette open></ui-command-palette>;\n}",
      angular: "<ui-command-palette [open]=\"true\"></ui-command-palette>",
      vue: "<template>\n  <UiCommandPalette :open=\"true\"></UiCommandPalette>\n</template>"
    }
  },
  {
    id: "context-menu",
    name: "Context Menu",
    tag: "ui-context-menu",
    category: "Navigation",
    description: "Place a `<template slot=\"item\">` inside the menu to customize how each option renders. The slot receives scoped bindings via `let-item`, `let-index`, `let-level`, `let-path`, `let-active`, `let-checked`, and `let-has-children`, so you can render badges, descriptions, icons, or contextual helpers alongside the default fallback markup.",
    totalProps: 20,
    totalEvents: 4,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 17,
    color: "#fb7185",
    props: [
      {
        name: "beforeClose",
        type: "() => boolean | Promise<boolean>",
        default: "",
        description: "Hook invoked before menu closes; return false or rejected Promise to cancel"
      },
      {
        name: "beforeOpen",
        type: "() => boolean | Promise<boolean>",
        default: "",
        description: "Hook invoked before menu opens; return false or rejected Promise to cancel"
      },
      {
        name: "closeOnSelect",
        attr: "close-on-select",
        type: "boolean",
        default: "true",
        description: "Close menu when selecting an item"
      },
      {
        name: "hoverCloseDelay",
        attr: "hover-close-delay",
        type: "number",
        default: "50",
        description: "Delay for closing menu on mouse leave (ms)"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "itemHeight",
        attr: "item-height",
        type: "number",
        default: "48",
        description: "Fixed per-item height (px) used when virtualization is active so offsets can be calculated."
      },
      {
        name: "items",
        attr: "items",
        type: "ContextMenuItem[] | string",
        default: "[]",
        description: "Menu items, can be JSON string or array"
      },
      {
        name: "loadItems",
        type: "(offset: number, limit: number) => Promise<ContextMenuItem[]>",
        default: "",
        description: "Optional async loader for paginated/virtualized root items (return `[]` when no further data is available)."
      },
      {
        name: "longPressDuration",
        attr: "long-press-duration",
        type: "number",
        default: "500",
        description: "Duration needed for a touch to be treated as a long press (ms)"
      },
      {
        name: "openOn",
        attr: "open-on",
        type: "\"click\" | \"contextmenu\" | \"hover\"",
        default: "'contextmenu'",
        description: "Listen trigger on: contextmenu, click, hover",
        options: [
          "click",
          "contextmenu",
          "hover"
        ]
      },
      {
        name: "persistState",
        attr: "persist-state",
        type: "boolean",
        default: "false",
        description: "Keep checkbox/radio state even if the menu re-opens"
      },
      {
        name: "placement",
        attr: "placement",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'bottom'",
        description: "Placement of the menu relative to target: 'bottom' (default), 'top', 'right', 'left'",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "reserveIconSpace",
        attr: "reserve-icon-space",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "selectedId",
        attr: "selected-id",
        type: "string",
        default: "",
        description: "ID of the currently selected item (for persistent highlighting)"
      },
      {
        name: "submenuOpenDelay",
        attr: "submenu-open-delay",
        type: "number",
        default: "120",
        description: "Delay for submenu opening on hover (ms)"
      },
      {
        name: "target",
        attr: "target",
        type: "string",
        default: "",
        description: "Optional CSS selector for a target element to attach the context menu"
      },
      {
        name: "targetOnly",
        attr: "target-only",
        type: "boolean",
        default: "false",
        description: "Attach to slotted target only; otherwise listen at document"
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"dark\" | \"green\" | \"light\"",
        default: "'light'",
        description: "Reserve space for icons area even if item has no icon",
        options: [
          "dark",
          "green",
          "light"
        ]
      },
      {
        name: "viewportPadding",
        attr: "viewport-padding",
        type: "number",
        default: "16",
        description: "Pixel padding from viewport edges"
      },
      {
        name: "visibleCount",
        attr: "visible-count",
        type: "number",
        default: "0",
        description: "Set to a positive value (with `itemHeight`) to enable virtualized rendering of the root list."
      }
    ],
    events: [
      {
        name: "itemSelect",
        detail: "{ item: ContextMenuItem; path: number[]; }",
        description: "Emits when an item is selected"
      },
      {
        name: "longPress",
        detail: "Point",
        description: "Emits when the menu opens via a long press"
      },
      {
        name: "menuItemClick",
        detail: "{ item: ContextMenuItem; path: number[]; }",
        description: "Alias event used by existing demos"
      },
      {
        name: "menuToggle",
        detail: "boolean",
        description: "Emits when menu toggles"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-context-menu icon-library=\"default\" open-on=\"contextmenu\" persist-state></ui-context-menu>",
      stencil: "<ui-context-menu icon-library=\"default\" open-on=\"contextmenu\" persistState={true}></ui-context-menu>",
      react: "export default function Example() {\n  return <ui-context-menu icon-library=\"default\" open-on=\"contextmenu\" persistState></ui-context-menu>;\n}",
      angular: "<ui-context-menu icon-library=\"default\" open-on=\"contextmenu\" [persistState]=\"true\"></ui-context-menu>",
      vue: "<template>\n  <UiContextMenu icon-library=\"default\" open-on=\"contextmenu\" :persist-state=\"true\"></UiContextMenu>\n</template>"
    }
  },
  {
    id: "dialog-content",
    name: "Dialog Content",
    tag: "ui-dialog-content",
    category: "Feedback",
    description: "Dialog Content web component (<ui-dialog-content>).",
    totalProps: 3,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 111,
    color: "#818cf8",
    props: [
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Show loading/skeleton state"
      },
      {
        name: "noPadding",
        attr: "no-padding",
        type: "boolean",
        default: "false",
        description: "Remove default padding"
      },
      {
        name: "scrollable",
        attr: "scrollable",
        type: "boolean",
        default: "false",
        description: "Allow content area to scroll vertically"
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-dialog-content loading no-padding scrollable></ui-dialog-content>",
      stencil: "<ui-dialog-content loading={true} noPadding={true} scrollable={true}></ui-dialog-content>",
      react: "export default function Example() {\n  return <ui-dialog-content loading noPadding scrollable></ui-dialog-content>;\n}",
      angular: "<ui-dialog-content [loading]=\"true\" [noPadding]=\"true\" [scrollable]=\"true\"></ui-dialog-content>",
      vue: "<template>\n  <UiDialogContent :loading=\"true\" :no-padding=\"true\" :scrollable=\"true\"></UiDialogContent>\n</template>"
    }
  },
  {
    id: "dialog-footer",
    name: "Dialog Footer",
    tag: "ui-dialog-footer",
    category: "Feedback",
    description: "Dialog Footer web component (<ui-dialog-footer>).",
    totalProps: 3,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 158,
    color: "#a855f7",
    props: [
      {
        name: "align",
        attr: "align",
        type: "\"center\" | \"end\" | \"space-between\" | \"start\"",
        default: "'end'",
        description: "Horizontal alignment of footer content",
        options: [
          "center",
          "end",
          "space-between",
          "start"
        ]
      },
      {
        name: "divider",
        attr: "divider",
        type: "boolean",
        default: "true",
        description: "Show/hide the top divider border"
      },
      {
        name: "sticky",
        attr: "sticky",
        type: "boolean",
        default: "false",
        description: "Pin the footer to the bottom of the dialog when content scrolls"
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-dialog-footer align=\"end\" sticky></ui-dialog-footer>",
      stencil: "<ui-dialog-footer align=\"end\" sticky={true}></ui-dialog-footer>",
      react: "export default function Example() {\n  return <ui-dialog-footer align=\"end\" sticky></ui-dialog-footer>;\n}",
      angular: "<ui-dialog-footer align=\"end\" [sticky]=\"true\"></ui-dialog-footer>",
      vue: "<template>\n  <UiDialogFooter align=\"end\" :sticky=\"true\"></UiDialogFooter>\n</template>"
    }
  },
  {
    id: "dialog-header",
    name: "Dialog Header",
    tag: "ui-dialog-header",
    category: "Feedback",
    description: "Dialog Header web component (<ui-dialog-header>).",
    totalProps: 17,
    totalEvents: 4,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 205,
    color: "#22d3ee",
    props: [
      {
        name: "avatar",
        attr: "avatar",
        type: "string",
        default: "''",
        description: "User avatar URL to show before the title"
      },
      {
        name: "dialogTitle",
        attr: "dialog-title",
        type: "string",
        default: "''",
        description: "Dialog title"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: "Icon name to show before the title"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Library to use for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"left\" | \"right\"",
        default: "'left'",
        description: "Position of the icon/avatar relative to the title",
        options: [
          "left",
          "right"
        ]
      },
      {
        name: "menuIcon",
        attr: "menu-icon",
        type: "string",
        default: "'more-horizontal'",
        description: "Icon name for the menu trigger button. Defaults to 'more-horizontal' (⋯)."
      },
      {
        name: "menuItems",
        attr: "menu-items",
        type: "any[] | string",
        default: "[]",
        description: "Menu items for the built-in context menu."
      },
      {
        name: "menuTitle",
        attr: "menu-title",
        type: "string",
        default: "'Menu'",
        description: "Tooltip/title for the menu trigger button."
      },
      {
        name: "showClose",
        attr: "show-close",
        type: "boolean",
        default: "true",
        description: "Whether to show close button"
      },
      {
        name: "showMaximize",
        attr: "show-maximize",
        type: "boolean",
        default: "true",
        description: "Whether to show maximize button"
      },
      {
        name: "showMenu",
        attr: "show-menu",
        type: "boolean",
        default: "false",
        description: "Whether to show menu button"
      },
      {
        name: "showMinimize",
        attr: "show-minimize",
        type: "boolean",
        default: "true",
        description: "Whether to show minimize button"
      },
      {
        name: "status",
        attr: "status",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Dialog status/type",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "subtitle",
        attr: "subtitle",
        type: "string",
        default: "''",
        description: "Subtitle text"
      },
      {
        name: "titleTag",
        attr: "title-tag",
        type: "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
        default: "'h3'",
        description: "Semantic tag for the title (h1-h6)",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6"
        ]
      },
      {
        name: "type",
        attr: "type",
        type: "\"alert\" | \"confirm\" | \"default\" | \"delete\" | \"drawer\" | \"fullscreen\" | \"messagebox\" | \"modal\" | \"pre-session\" | \"prompt\" | \"session\" | \"terms\" | \"upload\"",
        default: "'modal'",
        description: "Dialog type (messagebox etc)",
        options: [
          "alert",
          "confirm",
          "default",
          "delete",
          "drawer",
          "fullscreen",
          "messagebox",
          "modal",
          "pre-session",
          "prompt",
          "session",
          "terms",
          "upload"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'outlined'",
        description: "Dialog variant style",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      }
    ],
    events: [
      {
        name: "close",
        detail: "any",
        description: "Event emitted when close button is clicked"
      },
      {
        name: "maximize",
        detail: "any",
        description: "Event emitted when maximize button is clicked"
      },
      {
        name: "menu",
        detail: "any",
        description: "Event emitted when menu button is clicked"
      },
      {
        name: "minimize",
        detail: "any",
        description: "Event emitted when minimize button is clicked"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-dialog-header icon-library=\"default\" icon-position=\"left\" show-menu></ui-dialog-header>",
      stencil: "<ui-dialog-header icon-library=\"default\" icon-position=\"left\" showMenu={true}></ui-dialog-header>",
      react: "export default function Example() {\n  return <ui-dialog-header icon-library=\"default\" icon-position=\"left\" showMenu></ui-dialog-header>;\n}",
      angular: "<ui-dialog-header icon-library=\"default\" icon-position=\"left\" [showMenu]=\"true\"></ui-dialog-header>",
      vue: "<template>\n  <UiDialogHeader icon-library=\"default\" icon-position=\"left\" :show-menu=\"true\"></UiDialogHeader>\n</template>"
    }
  },
  {
    id: "divider",
    name: "Divider",
    tag: "ui-divider",
    category: "Layout",
    description: "A flexible divider component that can display text and supports various styles and orientations.",
    totalProps: 51,
    totalEvents: 3,
    variantsCount: 7,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 252,
    color: "#34d399",
    props: [
      {
        name: "animation",
        attr: "animation",
        type: "\"expand\" | \"fade\" | \"none\" | \"slide\"",
        default: "'none'",
        description: "Animation type",
        options: [
          "expand",
          "fade",
          "none",
          "slide"
        ]
      },
      {
        name: "aura",
        attr: "aura",
        type: "boolean",
        default: "false",
        description: "Dynamic flowing glow effect (Aura)"
      },
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "''",
        description: "Badge/counter text"
      },
      {
        name: "borderRadius",
        attr: "border-radius",
        type: "string",
        default: "''",
        description: "Border radius for lines"
      },
      {
        name: "clickable",
        attr: "clickable",
        type: "boolean",
        default: "false",
        description: "Make divider clickable"
      },
      {
        name: "color",
        attr: "color",
        type: "string",
        default: "''",
        description: "Theme color or custom CSS color"
      },
      {
        name: "currentStep",
        attr: "current-step",
        type: "number",
        default: "0",
        description: "Current active step in stepper mode (1-indexed)"
      },
      {
        name: "dragEnabled",
        attr: "drag-enabled",
        type: "boolean",
        default: "false",
        description: "Turn the divider into a functional range slider/scrubber"
      },
      {
        name: "enableHaptics",
        attr: "enable-haptics",
        type: "boolean",
        default: "false",
        description: "Emit haptic audio events on interaction"
      },
      {
        name: "gap",
        attr: "gap",
        type: "string",
        default: "''",
        description: "Spacing around the divider (margin)"
      },
      {
        name: "glass",
        attr: "glass",
        type: "boolean",
        default: "false",
        description: "Glassmorphism effect (backdrop-blur)"
      },
      {
        name: "glow",
        attr: "glow",
        type: "boolean",
        default: "false",
        description: "Glow effect"
      },
      {
        name: "heatmap",
        attr: "heatmap",
        type: "boolean",
        default: "false",
        description: "Heatmap status gradient based on percentage"
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "''",
        description: "Height of the divider"
      },
      {
        name: "holographic",
        attr: "holographic",
        type: "boolean",
        default: "false",
        description: "Chromatic aberration (glitch) effect on hover"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: "Icon to display on the divider (emoji or character)"
      },
      {
        name: "iconAnimation",
        attr: "icon-animation",
        type: "\"flip\" | \"none\" | \"pulse\" | \"spin\"",
        default: "'none'",
        description: "Animation style for the icon/icon area",
        options: [
          "flip",
          "none",
          "pulse",
          "spin"
        ]
      },
      {
        name: "image",
        attr: "image",
        type: "string",
        default: "''",
        description: "Image URL to display as an avatar/icon"
      },
      {
        name: "inset",
        attr: "inset",
        type: "\"both\" | \"end\" | \"none\" | \"start\"",
        default: "'none'",
        description: "Inset style",
        options: [
          "both",
          "end",
          "none",
          "start"
        ]
      },
      {
        name: "kinetic",
        attr: "kinetic",
        type: "boolean",
        default: "false",
        description: "Kinetic animated gradient flow"
      },
      {
        name: "linecap",
        attr: "linecap",
        type: "\"butt\" | \"round\" | \"square\"",
        default: "'butt'",
        description: "Style of the line ends: 'butt', 'round', or 'square'",
        options: [
          "butt",
          "round",
          "square"
        ]
      },
      {
        name: "lines",
        attr: "lines",
        type: "\"all\" | \"end\" | \"none\" | \"start\"",
        default: "'all'",
        description: "Control which lines are rendered: 'all', 'start', 'end', or 'none'",
        options: [
          "all",
          "end",
          "none",
          "start"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state (shows a shimmer effect)"
      },
      {
        name: "maxWidth",
        attr: "max-width",
        type: "string",
        default: "''",
        description: "Max width for divider"
      },
      {
        name: "opacity",
        attr: "opacity",
        type: "number",
        default: "1",
        description: "Opacity (0-1)"
      },
      {
        name: "organic",
        attr: "organic",
        type: "boolean",
        default: "false",
        description: "Organic wobbling SVG morph on hover"
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation of the divider: 'horizontal' or 'vertical'",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "parallax",
        attr: "parallax",
        type: "boolean",
        default: "false",
        description: "Parallax shadow projection for depth"
      },
      {
        name: "pattern",
        attr: "pattern",
        type: "\"dots\" | \"none\" | \"stripes\" | \"wavy\" | \"zigzag\"",
        default: "'none'",
        description: "Pattern style",
        options: [
          "dots",
          "none",
          "stripes",
          "wavy",
          "zigzag"
        ]
      },
      {
        name: "percent",
        attr: "percent",
        type: "number",
        default: "0",
        description: "Percentage for heatmap gradient (0-100)"
      },
      {
        name: "plain",
        attr: "plain",
        type: "boolean",
        default: "false",
        description: "If true, renders without the separator lines"
      },
      {
        name: "responsive",
        attr: "responsive",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"none\" | \"sm\" | \"small\"",
        default: "'none'",
        description: "Automatic orientation switch based on screen width",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "none",
          "sm",
          "small"
        ]
      },
      {
        name: "reveal",
        attr: "reveal",
        type: "boolean",
        default: "false",
        description: "Cinematic reveal animation on scroll into view"
      },
      {
        name: "ripple",
        attr: "ripple",
        type: "boolean",
        default: "false",
        description: "Tactile ripple effect on click"
      },
      {
        name: "shadow",
        attr: "shadow",
        type: "boolean",
        default: "false",
        description: "Shadow effect"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"arrow\" | \"curve\" | \"none\" | \"tilt\" | \"triangle\" | \"wave\" | \"zigzag\"",
        default: "'none'",
        description: "Shape divider type",
        options: [
          "arrow",
          "curve",
          "none",
          "tilt",
          "triangle",
          "wave",
          "zigzag"
        ]
      },
      {
        name: "shapeColor",
        attr: "shape-color",
        type: "string",
        default: "''",
        description: "Color for the shape divider"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size/thickness of the divider line",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "spacing",
        attr: "spacing",
        type: "\"comfortable\" | \"compact\" | \"none\" | \"spacious\"",
        default: "'none'",
        description: "Spacing preset",
        options: [
          "comfortable",
          "compact",
          "none",
          "spacious"
        ]
      },
      {
        name: "steps",
        attr: "steps",
        type: "number",
        default: "0",
        description: "Number of steps for timeline/stepper mode"
      },
      {
        name: "stream",
        attr: "stream",
        type: "boolean",
        default: "false",
        description: "Real-time data streaming flicker on the line track"
      },
      {
        name: "subtitle",
        attr: "subtitle",
        type: "string",
        default: "''",
        description: "Subtitle text to display below the main text"
      },
      {
        name: "teleportTo",
        attr: "teleport-to",
        type: "string",
        default: "''",
        description: "Target element ID to scroll to when clicked"
      },
      {
        name: "text",
        attr: "text",
        type: "string",
        default: "''",
        description: "Text to display on the divider"
      },
      {
        name: "textAlign",
        attr: "text-align",
        type: "\"center\" | \"end\" | \"left\" | \"right\" | \"start\"",
        default: "'center'",
        description: "Text alignment: 'start', 'center', or 'end'",
        options: [
          "center",
          "end",
          "left",
          "right",
          "start"
        ]
      },
      {
        name: "textColor",
        attr: "text-color",
        type: "string",
        default: "''",
        description: "Custom color for the text (CSS color value)"
      },
      {
        name: "textTransform",
        attr: "text-transform",
        type: "\"capitalize\" | \"lowercase\" | \"none\" | \"uppercase\"",
        default: "'capitalize'",
        description: "Text transformation",
        options: [
          "capitalize",
          "lowercase",
          "none",
          "uppercase"
        ]
      },
      {
        name: "thickness",
        attr: "thickness",
        type: "string",
        default: "''",
        description: "Precise thickness (e.g., '1px', '4px') - overrides size if set"
      },
      {
        name: "upright",
        attr: "upright",
        type: "boolean",
        default: "false",
        description: "Use upright characters in vertical orientation"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"dashed\" | \"dotted\" | \"double-dashed\" | \"double-dotted\" | \"double-solid\" | \"gradient\" | \"solid\"",
        default: "'solid'",
        description: "Visual variant of the divider line",
        options: [
          "dashed",
          "dotted",
          "double-dashed",
          "double-dotted",
          "double-solid",
          "gradient",
          "solid"
        ]
      },
      {
        name: "verticalAlign",
        attr: "vertical-align",
        type: "\"bottom\" | \"center\" | \"top\"",
        default: "'center'",
        description: "Vertical alignment: 'top', 'center', or 'bottom' (only for vertical orientation)",
        options: [
          "bottom",
          "center",
          "top"
        ]
      }
    ],
    events: [
      {
        name: "dividerChange",
        detail: "{ percent: number; step: number; }",
        description: "Fired when draggable divider changes"
      },
      {
        name: "dividerClick",
        detail: "MouseEvent",
        description: "Fired when divider is clicked"
      },
      {
        name: "dividerHaptic",
        detail: "{ type: \"step\" | \"click\" | \"hover\" | \"reveal\"; }",
        description: "Fired for audio/haptic cues"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-divider animation=\"none\" aura clickable></ui-divider>",
      stencil: "<ui-divider animation=\"none\" aura={true} clickable={true}></ui-divider>",
      react: "export default function Example() {\n  return <ui-divider animation=\"none\" aura clickable></ui-divider>;\n}",
      angular: "<ui-divider animation=\"none\" [aura]=\"true\" [clickable]=\"true\"></ui-divider>",
      vue: "<template>\n  <UiDivider animation=\"none\" :aura=\"true\" :clickable=\"true\"></UiDivider>\n</template>"
    }
  },
  {
    id: "dock",
    name: "Dock",
    tag: "ui-dock",
    category: "Navigation",
    description: "Dock web component (<ui-dock>).",
    totalProps: 8,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 299,
    color: "#f472b6",
    props: [
      {
        name: "blurEffect",
        attr: "blur-effect",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "items",
        attr: "items",
        type: "string",
        default: "'[]'",
        description: ""
      },
      {
        name: "magnify",
        attr: "magnify",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "persistKey",
        attr: "persist-key",
        type: "string",
        default: "''",
        description: "localStorage key for persisting drag-reorder. Empty string disables persistence."
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'bottom'",
        description: "",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "showLabels",
        attr: "show-labels",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      }
    ],
    events: [
      {
        name: "dockItemClick",
        detail: "DockItemClickEvent",
        description: ""
      },
      {
        name: "itemsOrderChange",
        detail: "DockItem[]",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-dock icon-library=\"default\" position=\"bottom\" size=\"md\"></ui-dock>",
      stencil: "<ui-dock icon-library=\"default\" position=\"bottom\" size=\"md\"></ui-dock>",
      react: "export default function Example() {\n  return <ui-dock icon-library=\"default\" position=\"bottom\" size=\"md\"></ui-dock>;\n}",
      angular: "<ui-dock icon-library=\"default\" position=\"bottom\" size=\"md\"></ui-dock>",
      vue: "<template>\n  <UiDock icon-library=\"default\" position=\"bottom\" size=\"md\"></UiDock>\n</template>"
    }
  },
  {
    id: "dock-host",
    name: "Dock Host",
    tag: "ui-dock-host",
    category: "Navigation",
    description: "Dock Host web component (<ui-dock-host>).",
    totalProps: 4,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 346,
    color: "#fbbf24",
    props: [
      {
        name: "dock",
        attr: "dock",
        type: "\"bottom\" | \"float\" | \"left\" | \"right\" | \"top\"",
        default: "'left'",
        description: "",
        options: [
          "bottom",
          "float",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "'320px'",
        description: ""
      },
      {
        name: "relative",
        attr: "relative",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "'320px'",
        description: ""
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-dock-host dock=\"left\" relative></ui-dock-host>",
      stencil: "<ui-dock-host dock=\"left\" relative={true}></ui-dock-host>",
      react: "export default function Example() {\n  return <ui-dock-host dock=\"left\" relative></ui-dock-host>;\n}",
      angular: "<ui-dock-host dock=\"left\" [relative]=\"true\"></ui-dock-host>",
      vue: "<template>\n  <UiDockHost dock=\"left\" :relative=\"true\"></UiDockHost>\n</template>"
    }
  },
  {
    id: "drag-drop",
    name: "Drag Drop",
    tag: "ui-drag-drop",
    category: "Layout",
    description: "Drag Drop web component (<ui-drag-drop>).",
    totalProps: 5,
    totalEvents: 4,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 33,
    color: "#fb7185",
    props: [
      {
        name: "draggableEnabled",
        attr: "draggable-enabled",
        type: "boolean",
        default: "true",
        description: "When true each card is draggable; set to false to disable the behaviour."
      },
      {
        name: "gap",
        attr: "gap",
        type: "string",
        default: "'0.5rem'",
        description: "Space between cards (any CSS length)."
      },
      {
        name: "group",
        attr: "group",
        type: "string",
        default: "''",
        description: "Group name to allow dragging between different ui-drag-drop containers."
      },
      {
        name: "items",
        type: "DragDropItem[]",
        default: "[]",
        description: ""
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "Layout direction of the stack.",
        options: [
          "horizontal",
          "vertical"
        ]
      }
    ],
    events: [
      {
        name: "uiDragDropChange",
        detail: "DragDropChangeDetail",
        description: ""
      },
      {
        name: "uiDragEnd",
        detail: "{ item: DragDropItem; index: number; }",
        description: ""
      },
      {
        name: "uiDragStart",
        detail: "{ item: DragDropItem; index: number; }",
        description: ""
      },
      {
        name: "uiDrop",
        detail: "{ item: DragDropItem; sourceIndex: number; targetIndex: number; sourceGroup: string; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-drag-drop orientation=\"vertical\"></ui-drag-drop>",
      stencil: "<ui-drag-drop orientation=\"vertical\"></ui-drag-drop>",
      react: "export default function Example() {\n  return <ui-drag-drop orientation=\"vertical\"></ui-drag-drop>;\n}",
      angular: "<ui-drag-drop orientation=\"vertical\"></ui-drag-drop>",
      vue: "<template>\n  <UiDragDrop orientation=\"vertical\"></UiDragDrop>\n</template>"
    }
  },
  {
    id: "empty-state",
    name: "Empty State",
    tag: "ui-empty-state",
    category: "Feedback",
    description: "Empty State web component (<ui-empty-state>).",
    totalProps: 37,
    totalEvents: 5,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 127,
    color: "#818cf8",
    props: [
      {
        name: "actions",
        attr: "actions",
        type: "EmptyStateAction[] | string",
        default: "'[]'",
        description: ""
      },
      {
        name: "align",
        attr: "align",
        type: "\"center\" | \"left\" | \"right\"",
        default: "'center'",
        description: "",
        options: [
          "center",
          "left",
          "right"
        ]
      },
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "backButtonLabel",
        attr: "back-button-label",
        type: "string",
        default: "'Go Back'",
        description: ""
      },
      {
        name: "compact",
        attr: "compact",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "confetti",
        attr: "confetti",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "customClass",
        attr: "custom-class",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "",
        description: "Primary description / Troubleshooting tip"
      },
      {
        name: "elevated",
        attr: "elevated",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "fullHeight",
        attr: "full-height",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "heading",
        attr: "heading",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "iconColor",
        attr: "icon-color",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "iconSize",
        attr: "icon-size",
        type: "string",
        default: "'64px'",
        description: ""
      },
      {
        name: "illustration",
        attr: "illustration",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "image",
        attr: "image",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "imageAlt",
        attr: "image-alt",
        type: "string",
        default: "'Empty state'",
        description: ""
      },
      {
        name: "items",
        attr: "items",
        type: "EmptyStateItem[] | string",
        default: "'[]'",
        description: ""
      },
      {
        name: "itemsTitle",
        attr: "items-title",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "loadingAction",
        attr: "loading-action",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "maxWidth",
        attr: "max-width",
        type: "string",
        default: "'500px'",
        description: ""
      },
      {
        name: "message",
        attr: "message",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "padding",
        attr: "padding",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "primaryAction",
        attr: "primary-action",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "primaryActionIcon",
        attr: "primary-action-icon",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "retryDelay",
        attr: "retry-delay",
        type: "number",
        default: "0",
        description: "Auto-retry delay in seconds for error/offline states"
      },
      {
        name: "retryLabel",
        attr: "retry-label",
        type: "string",
        default: "'Retrying in {n}s...'",
        description: ""
      },
      {
        name: "rounded",
        attr: "rounded",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Try another search...'",
        description: ""
      },
      {
        name: "searchValue",
        attr: "search-value",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "secondaryAction",
        attr: "secondary-action",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "secondaryActionIcon",
        attr: "secondary-action-icon",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "showBackButton",
        attr: "show-back-button",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showSearch",
        attr: "show-search",
        type: "boolean",
        default: "false",
        description: "Show a search box within the empty state (useful for no-results)"
      },
      {
        name: "size",
        attr: "size",
        type: "\"large\" | \"md\" | \"small\"",
        default: "'md'",
        description: "",
        options: [
          "large",
          "md",
          "small"
        ]
      },
      {
        name: "type",
        attr: "type",
        type: "\"401\" | \"403\" | \"404\" | \"405\" | \"410\" | \"418\" | \"429\" | \"500\" | \"503\" | \"accomplishment\" | \"coming-soon\" | \"custom\" | \"empty\" | \"error\" | \"maintenance\" | \"no-data\" | \"no-favorites\" | \"no-files\" | \"no-history\" | \"no-messages\" | \"no-notifications\" | \"no-results\" | \"no-search\" | \"no-tasks\" | \"offline\" | \"onboarding\" | \"paywall\" | \"success\"",
        default: "'no-data'",
        description: "",
        options: [
          "401",
          "403",
          "404",
          "405",
          "410",
          "418",
          "429",
          "500",
          "503",
          "accomplishment",
          "coming-soon",
          "custom",
          "empty",
          "error",
          "maintenance",
          "no-data",
          "no-favorites",
          "no-files",
          "no-history",
          "no-messages",
          "no-notifications",
          "no-results",
          "no-search",
          "no-tasks",
          "offline",
          "onboarding",
          "paywall",
          "success"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"filled\" | \"minimal\" | \"outlined\"",
        default: "'default'",
        description: "",
        options: [
          "default",
          "filled",
          "minimal",
          "outlined"
        ]
      }
    ],
    events: [
      {
        name: "actionClick",
        detail: "{ action: string; value?: string; }",
        description: ""
      },
      {
        name: "backClick",
        detail: "void",
        description: ""
      },
      {
        name: "itemClick",
        detail: "{ item: EmptyStateItem; }",
        description: ""
      },
      {
        name: "retry",
        detail: "void",
        description: ""
      },
      {
        name: "searchChange",
        detail: "string",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-empty-state align=\"center\" compact confetti></ui-empty-state>",
      stencil: "<ui-empty-state align=\"center\" compact={true} confetti={true}></ui-empty-state>",
      react: "export default function Example() {\n  return <ui-empty-state align=\"center\" compact confetti></ui-empty-state>;\n}",
      angular: "<ui-empty-state align=\"center\" [compact]=\"true\" [confetti]=\"true\"></ui-empty-state>",
      vue: "<template>\n  <UiEmptyState align=\"center\" :compact=\"true\" :confetti=\"true\"></UiEmptyState>\n</template>"
    }
  },
  {
    id: "fab",
    name: "Fab",
    tag: "ui-fab",
    category: "Navigation",
    description: "Fab web component (<ui-fab>).",
    totalProps: 30,
    totalEvents: 5,
    variantsCount: 24,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 174,
    color: "#a855f7",
    props: [
      {
        name: "animation",
        attr: "animation",
        type: "\"fade\" | \"rotate\" | \"scale\" | \"slide-down\" | \"slide-left\" | \"slide-right\" | \"slide-up\"",
        default: "'scale'",
        description: "",
        options: [
          "fade",
          "rotate",
          "scale",
          "slide-down",
          "slide-left",
          "slide-right",
          "slide-up"
        ]
      },
      {
        name: "backdrop",
        attr: "backdrop",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "backdropClose",
        attr: "backdrop-close",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "closeOnAction",
        attr: "close-on-action",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "defaultOpen",
        attr: "default-open",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"bottom\" | \"left\" | \"radial\" | \"right\" | \"top\"",
        default: "'top'",
        description: "",
        options: [
          "bottom",
          "left",
          "radial",
          "right",
          "top"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "expandOnClick",
        attr: "expand-on-click",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "expandOnHover",
        attr: "expand-on-hover",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "hideOnScroll",
        attr: "hide-on-scroll",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "isExpanded",
        attr: "is-expanded",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "offsetX",
        attr: "offset-x",
        type: "number",
        default: "24",
        description: ""
      },
      {
        name: "offsetY",
        attr: "offset-y",
        type: "number",
        default: "24",
        description: ""
      },
      {
        name: "panel",
        attr: "panel",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "panelHeight",
        attr: "panel-height",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "panelMaxHeight",
        attr: "panel-max-height",
        type: "string",
        default: "'480px'",
        description: ""
      },
      {
        name: "panelTitle",
        attr: "panel-title",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "panelWidth",
        attr: "panel-width",
        type: "string",
        default: "'320px'",
        description: ""
      },
      {
        name: "persistent",
        attr: "persistent",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"center-left\" | \"center-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
        default: "'bottom-right'",
        description: "",
        options: [
          "bottom-center",
          "bottom-left",
          "bottom-right",
          "center-left",
          "center-right",
          "top-center",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "showOnScrollUp",
        attr: "show-on-scroll-up",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"mini\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "mini",
          "sm",
          "small"
        ]
      },
      {
        name: "toggle",
        attr: "toggle",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "type",
        attr: "type",
        type: "\"extended\" | \"speed-dial\" | \"standard\"",
        default: "'standard'",
        description: "",
        options: [
          "extended",
          "speed-dial",
          "standard"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "zIndex",
        attr: "z-index",
        type: "number",
        default: "1000",
        description: ""
      }
    ],
    events: [
      {
        name: "uiFabActionClick",
        detail: "{ value: any; }",
        description: ""
      },
      {
        name: "uiFabClick",
        detail: "MouseEvent",
        description: ""
      },
      {
        name: "uiFabClose",
        detail: "void",
        description: ""
      },
      {
        name: "uiFabOpen",
        detail: "void",
        description: ""
      },
      {
        name: "uiFabToggle",
        detail: "{ isExpanded: boolean; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-fab animation=\"scale\" backdrop default-open></ui-fab>",
      stencil: "<ui-fab animation=\"scale\" backdrop={true} defaultOpen={true}></ui-fab>",
      react: "export default function Example() {\n  return <ui-fab animation=\"scale\" backdrop defaultOpen></ui-fab>;\n}",
      angular: "<ui-fab animation=\"scale\" [backdrop]=\"true\" [defaultOpen]=\"true\"></ui-fab>",
      vue: "<template>\n  <UiFab animation=\"scale\" :backdrop=\"true\" :default-open=\"true\"></UiFab>\n</template>"
    }
  },
  {
    id: "fab-item",
    name: "Fab Item",
    tag: "ui-fab-item",
    category: "Navigation",
    description: "Fab Item web component (<ui-fab-item>).",
    totalProps: 6,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 221,
    color: "#22d3ee",
    props: [
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "tooltip",
        attr: "tooltip",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "value",
        attr: "value",
        type: "any",
        default: "",
        description: ""
      }
    ],
    events: [
      {
        name: "uiFabActionClick",
        detail: "{ value: any; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-fab-item disabled loading></ui-fab-item>",
      stencil: "<ui-fab-item disabled={true} loading={true}></ui-fab-item>",
      react: "export default function Example() {\n  return <ui-fab-item disabled loading></ui-fab-item>;\n}",
      angular: "<ui-fab-item [disabled]=\"true\" [loading]=\"true\"></ui-fab-item>",
      vue: "<template>\n  <UiFabItem :disabled=\"true\" :loading=\"true\"></UiFabItem>\n</template>"
    }
  },
  {
    id: "file-upload",
    name: "File Upload",
    tag: "ui-file-upload",
    category: "Forms",
    description: "File Upload web component (<ui-file-upload>).",
    totalProps: 20,
    totalEvents: 6,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 268,
    color: "#34d399",
    props: [
      {
        name: "accept",
        attr: "accept",
        type: "string",
        default: "''",
        description: "Accept attribute (e.g. 'image/*,.pdf')"
      },
      {
        name: "autoCloseOnSuccess",
        attr: "auto-close-on-success",
        type: "boolean",
        default: "false",
        description: "Automatically emit completion event and hide list when all files succeed"
      },
      {
        name: "autoUpload",
        attr: "auto-upload",
        type: "boolean",
        default: "true",
        description: "Automatically trigger upload when files are selected"
      },
      {
        name: "capture",
        attr: "capture",
        type: "\"environment\" | \"user\" | boolean",
        default: "false",
        description: "Capture attribute for mobile camera",
        options: [
          "environment",
          "user"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled"
      },
      {
        name: "fileNamePattern",
        attr: "file-name-pattern",
        type: "string",
        default: "''",
        description: "Custom regex pattern filenames must satisfy"
      },
      {
        name: "headerTitle",
        attr: "header-title",
        type: "string",
        default: "''",
        description: "Integrated header title (for sideload variant)"
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: "Helper text"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label"
      },
      {
        name: "maxFiles",
        attr: "max-files",
        type: "number",
        default: "5",
        description: "Max number of files"
      },
      {
        name: "maxSize",
        attr: "max-size",
        type: "number",
        default: "10 * 1024 * 1024",
        description: "Max file size in bytes"
      },
      {
        name: "minSize",
        attr: "min-size",
        type: "number",
        default: "0",
        description: "Min file size in bytes"
      },
      {
        name: "multiple",
        attr: "multiple",
        type: "boolean",
        default: "false",
        description: "Allow multiple files"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "showPreview",
        attr: "show-preview",
        type: "boolean",
        default: "true",
        description: "Show file previews"
      },
      {
        name: "showUploadButton",
        attr: "show-upload-button",
        type: "boolean",
        default: "false",
        description: "Show manual upload button"
      },
      {
        name: "showValidateButton",
        attr: "show-validate-button",
        type: "boolean",
        default: "false",
        description: "Show manual validate button"
      },
      {
        name: "uploadIcon",
        attr: "upload-icon",
        type: "string",
        default: "'📁'",
        description: "Icon emoji or text"
      },
      {
        name: "validateFileName",
        attr: "validate-file-name",
        type: "boolean",
        default: "true",
        description: "Enable basic filename validation"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"button\" | \"compact\" | \"dropzone\" | \"sideload\"",
        default: "'dropzone'",
        description: "Variant: 'dropzone' | 'button' | 'compact' | 'sideload'",
        options: [
          "button",
          "compact",
          "dropzone",
          "sideload"
        ]
      }
    ],
    events: [
      {
        name: "allUploadsComplete",
        detail: "UploadedFile[]",
        description: ""
      },
      {
        name: "fileReject",
        detail: "FileUploadValidationError[]",
        description: ""
      },
      {
        name: "fileRemove",
        detail: "string",
        description: ""
      },
      {
        name: "fileSelect",
        detail: "UploadedFile[]",
        description: ""
      },
      {
        name: "uploadProgress",
        detail: "{ fileName: string; progress: number; }",
        description: ""
      },
      {
        name: "uploadSuccess",
        detail: "UploadedFile",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-file-upload auto-close-on-success capture=\"false\" disabled></ui-file-upload>",
      stencil: "<ui-file-upload autoCloseOnSuccess={true} capture=\"false\" disabled={true}></ui-file-upload>",
      react: "export default function Example() {\n  return <ui-file-upload autoCloseOnSuccess capture=\"false\" disabled></ui-file-upload>;\n}",
      angular: "<ui-file-upload [autoCloseOnSuccess]=\"true\" capture=\"false\" [disabled]=\"true\"></ui-file-upload>",
      vue: "<template>\n  <UiFileUpload :auto-close-on-success=\"true\" capture=\"false\" :disabled=\"true\"></UiFileUpload>\n</template>"
    }
  },
  {
    id: "horizontal-nav",
    name: "Horizontal Nav",
    tag: "ui-horizontal-nav",
    category: "Navigation",
    description: "Horizontal Nav web component (<ui-horizontal-nav>).",
    totalProps: 10,
    totalEvents: 1,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 315,
    color: "#f472b6",
    props: [
      {
        name: "activeId",
        attr: "active-id",
        type: "string",
        default: "",
        description: "Active item ID"
      },
      {
        name: "align",
        attr: "align",
        type: "\"center\" | \"end\" | \"space-between\" | \"start\"",
        default: "'start'",
        description: "Alignment of items",
        options: [
          "center",
          "end",
          "space-between",
          "start"
        ]
      },
      {
        name: "displayAs",
        attr: "display-as",
        type: "\"buttons\" | \"list\"",
        default: "'buttons'",
        description: "Display format: 'buttons' (default) or 'list'",
        options: [
          "buttons",
          "list"
        ]
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: "Full width items"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "items",
        attr: "items",
        type: "HorizontalNavItem[] | string",
        default: "[]",
        description: "Navigation items"
      },
      {
        name: "scrollable",
        attr: "scrollable",
        type: "boolean",
        default: "false",
        description: "Enable scrolling for overflow items"
      },
      {
        name: "showDivider",
        attr: "show-divider",
        type: "boolean",
        default: "false",
        description: "Show divider between items"
      },
      {
        name: "size",
        attr: "size",
        type: "\"lg\" | \"md\" | \"sm\"",
        default: "'md'",
        description: "Size of navigation items",
        options: [
          "lg",
          "md",
          "sm"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"pills\" | \"segmented\" | \"underline\"",
        default: "'default'",
        description: "Variant style",
        options: [
          "default",
          "pills",
          "segmented",
          "underline"
        ]
      }
    ],
    events: [
      {
        name: "navItemClick",
        detail: "HorizontalNavItem",
        description: "Event emitted when a nav item is clicked"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-horizontal-nav align=\"start\" display-as=\"buttons\" full-width></ui-horizontal-nav>",
      stencil: "<ui-horizontal-nav align=\"start\" display-as=\"buttons\" fullWidth={true}></ui-horizontal-nav>",
      react: "export default function Example() {\n  return <ui-horizontal-nav align=\"start\" display-as=\"buttons\" fullWidth></ui-horizontal-nav>;\n}",
      angular: "<ui-horizontal-nav align=\"start\" display-as=\"buttons\" [fullWidth]=\"true\"></ui-horizontal-nav>",
      vue: "<template>\n  <UiHorizontalNav align=\"start\" display-as=\"buttons\" :full-width=\"true\"></UiHorizontalNav>\n</template>"
    }
  },
  {
    id: "icon",
    name: "Icon",
    tag: "ui-icon",
    category: "Data Display",
    description: "Icon web component (<ui-icon>).",
    totalProps: 9,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 2,
    color: "#fbbf24",
    props: [
      {
        name: "color",
        attr: "color",
        type: "string",
        default: "",
        description: "The color of the icon"
      },
      {
        name: "fill",
        attr: "fill",
        type: "string",
        default: "",
        description: "Optional fill color for the icon (works with 'lucide' and 'google')"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Accessible label for the icon. If provided, the icon will have role=\"img\" and an aria-label. If not provided, the icon is considered decorative (aria-hidden=\"true\")."
      },
      {
        name: "library",
        attr: "library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "The library to use for the icon. Options: 'se' (Schneider Electric), 'fontawesome', 'icons8', 'iconoir', 'ionicons', 'lucide', 'bootstrap', 'google' (Material Symbols), 'remixicon', 'emoji' (renders the name as a native emoji), or 'default' (URL/SVG/Text)",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Whether the icon is in a loading state. Shows a small loader."
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "",
        description: "The name of the icon"
      },
      {
        name: "size",
        attr: "size",
        type: "number | string",
        default: "",
        description: "The size of the icon (e.g., '16px', '2rem', or a number) For 'se', 'ionicons', and 'lucide', this maps to specific library behavior."
      },
      {
        name: "spin",
        attr: "spin",
        type: "boolean",
        default: "false",
        description: "Whether the icon should spin"
      },
      {
        name: "src",
        attr: "src",
        type: "string",
        default: "",
        description: "Optional source URL for an image icon"
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-icon library=\"default\" loading spin></ui-icon>",
      stencil: "<ui-icon library=\"default\" loading={true} spin={true}></ui-icon>",
      react: "export default function Example() {\n  return <ui-icon library=\"default\" loading spin></ui-icon>;\n}",
      angular: "<ui-icon library=\"default\" [loading]=\"true\" [spin]=\"true\"></ui-icon>",
      vue: "<template>\n  <UiIcon library=\"default\" :loading=\"true\" :spin=\"true\"></UiIcon>\n</template>"
    }
  },
  {
    id: "knob",
    name: "Knob",
    tag: "ui-knob",
    category: "Forms",
    description: "Knob web component (<ui-knob>).",
    totalProps: 25,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 96,
    color: "#38bdf8",
    props: [
      {
        name: "allowInput",
        attr: "allow-input",
        type: "boolean",
        default: "false",
        description: "Allow double-click to edit value manually"
      },
      {
        name: "color",
        attr: "color",
        type: "string | { from?: string; to?: string; }",
        default: "'#3bf673'",
        description: "Color of the active arc (string or {from: string, to: string})"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "enableWheel",
        attr: "enable-wheel",
        type: "boolean",
        default: "true",
        description: "Enable mouse wheel rotation control"
      },
      {
        name: "endAngle",
        attr: "end-angle",
        type: "number",
        default: "405",
        description: "End angle in degrees"
      },
      {
        name: "gradient",
        attr: "gradient",
        type: "boolean",
        default: "false",
        description: "Enable gradient for the active arc"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "100",
        description: "Maximum value"
      },
      {
        name: "min",
        attr: "min",
        type: "number",
        default: "0",
        description: "Minimum value"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "",
        description: "Name of the form control"
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: "Read-only state"
      },
      {
        name: "showLabels",
        attr: "show-labels",
        type: "boolean",
        default: "false",
        description: "Show numeric labels around the knob"
      },
      {
        name: "showMinMax",
        attr: "show-min-max",
        type: "boolean",
        default: "false",
        description: "Show min/max labels"
      },
      {
        name: "showTicks",
        attr: "show-ticks",
        type: "boolean",
        default: "false",
        description: "Show tick marks along the arc (useful for speedometer-like gauges)"
      },
      {
        name: "showValue",
        attr: "show-value",
        type: "boolean",
        default: "true",
        description: "Show value label"
      },
      {
        name: "size",
        attr: "size",
        type: "number",
        default: "120",
        description: "Size of the knob"
      },
      {
        name: "snap",
        attr: "snap",
        type: "boolean",
        default: "false",
        description: "Snap to step intervals"
      },
      {
        name: "startAngle",
        attr: "start-angle",
        type: "number",
        default: "135",
        description: "Start angle in degrees (0 = top, 90 = right)"
      },
      {
        name: "step",
        attr: "step",
        type: "number",
        default: "1",
        description: "Step increment"
      },
      {
        name: "strokeWidth",
        attr: "stroke-width",
        type: "number",
        default: "8",
        description: "Stroke width"
      },
      {
        name: "tickColor",
        attr: "tick-color",
        type: "string",
        default: "'#94a3b8'",
        description: "Tick color"
      },
      {
        name: "tickCount",
        attr: "tick-count",
        type: "number",
        default: "10",
        description: "Number of tick marks to render along the arc"
      },
      {
        name: "tickLength",
        attr: "tick-length",
        type: "number",
        default: "0.1",
        description: "Tick length factor relative to radius (0-1)"
      },
      {
        name: "trackColor",
        attr: "track-color",
        type: "string",
        default: "'#e2e8f0'",
        description: "Color of the track"
      },
      {
        name: "value",
        attr: "value",
        type: "number",
        default: "0",
        description: "Current value"
      },
      {
        name: "valueSuffix",
        attr: "value-suffix",
        type: "string",
        default: "''",
        description: "Custom value suffix (e.g., '%', '°', 'dB')"
      }
    ],
    events: [
      {
        name: "knobChange",
        detail: "number",
        description: "Event emitted when value changes"
      },
      {
        name: "knobInput",
        detail: "number",
        description: "Event emitted while dragging"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-knob allow-input disabled gradient></ui-knob>",
      stencil: "<ui-knob allowInput={true} disabled={true} gradient={true}></ui-knob>",
      react: "export default function Example() {\n  return <ui-knob allowInput disabled gradient></ui-knob>;\n}",
      angular: "<ui-knob [allowInput]=\"true\" [disabled]=\"true\" [gradient]=\"true\"></ui-knob>",
      vue: "<template>\n  <UiKnob :allow-input=\"true\" :disabled=\"true\" :gradient=\"true\"></UiKnob>\n</template>"
    }
  },
  {
    id: "library",
    name: "Library",
    tag: "ui-library",
    category: "Data Display",
    description: "Library web component (<ui-library>).",
    totalProps: 1,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 143,
    color: "#818cf8",
    props: [
      {
        name: "mode",
        attr: "mode",
        type: "\"demo\" | \"doc\"",
        default: "'demo'",
        description: "",
        options: [
          "demo",
          "doc"
        ]
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-library mode=\"demo\"></ui-library>",
      stencil: "<ui-library mode=\"demo\"></ui-library>",
      react: "export default function Example() {\n  return <ui-library mode=\"demo\"></ui-library>;\n}",
      angular: "<ui-library mode=\"demo\"></ui-library>",
      vue: "<template>\n  <UiLibrary mode=\"demo\"></UiLibrary>\n</template>"
    }
  },
  {
    id: "list",
    name: "List",
    tag: "ui-list",
    category: "Data Display",
    description: "List web component (<ui-list>).",
    totalProps: 61,
    totalEvents: 11,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 190,
    color: "#a855f7",
    props: [
      {
        name: "altMode",
        attr: "alt-mode",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "ariaLabel",
        attr: "aria-label",
        type: "string",
        default: "'System Cluster List'",
        description: ""
      },
      {
        name: "bulkActions",
        type: "any[]",
        default: "[]",
        description: ""
      },
      {
        name: "checkboxSelection",
        attr: "checkbox-selection",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "columns",
        type: "any[]",
        default: "[]",
        description: ""
      },
      {
        name: "commandK",
        attr: "command-k",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "currentPage",
        attr: "current-page",
        type: "number",
        default: "1",
        description: ""
      },
      {
        name: "dense",
        attr: "dense",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "density",
        attr: "density",
        type: "\"comfortable\" | \"compact\" | \"cozy\"",
        default: "'comfortable'",
        description: "",
        options: [
          "comfortable",
          "compact",
          "cozy"
        ]
      },
      {
        name: "dividers",
        attr: "dividers",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "dragGroup",
        attr: "drag-group",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "elevated",
        attr: "elevated",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "emptyStateActionLabel",
        attr: "empty-state-action-label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "emptyStateTitle",
        attr: "empty-state-title",
        type: "string",
        default: "'No results found'",
        description: ""
      },
      {
        name: "emptyText",
        attr: "empty-text",
        type: "string",
        default: "'No items found'",
        description: ""
      },
      {
        name: "filterChips",
        type: "any[]",
        default: "[]",
        description: ""
      },
      {
        name: "floatingFAB",
        attr: "floating-f-a-b",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "flush",
        attr: "flush",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "grid",
        attr: "grid",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "gridCols",
        attr: "grid-cols",
        type: "number",
        default: "3",
        description: ""
      },
      {
        name: "groupBy",
        attr: "group-by",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "groupFooterLabel",
        attr: "group-footer-label",
        type: "string",
        default: "'Items'",
        description: ""
      },
      {
        name: "grouped",
        attr: "grouped",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "horizontal",
        attr: "horizontal",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "infinite",
        attr: "infinite",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "itemHeight",
        attr: "item-height",
        type: "number",
        default: "48",
        description: ""
      },
      {
        name: "items",
        type: "any[]",
        default: "[]",
        description: ""
      },
      {
        name: "itemsPerPage",
        attr: "items-per-page",
        type: "number",
        default: "10",
        description: ""
      },
      {
        name: "keyboardNavigation",
        attr: "keyboard-navigation",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "loadMoreThreshold",
        attr: "load-more-threshold",
        type: "number",
        default: "50",
        description: ""
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "loadingText",
        attr: "loading-text",
        type: "string",
        default: "'Loading...'",
        description: ""
      },
      {
        name: "maxHeight",
        attr: "max-height",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "multiSelect",
        attr: "multi-select",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "numbered",
        attr: "numbered",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "padding",
        attr: "padding",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "paginated",
        attr: "paginated",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "rounded",
        attr: "rounded",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search...'",
        description: ""
      },
      {
        name: "searchQuery",
        attr: "search-query",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "selectable",
        attr: "selectable",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "selectedValues",
        type: "string[]",
        default: "[]",
        description: ""
      },
      {
        name: "selectionHeaderColor",
        attr: "selection-header-color",
        type: "string",
        default: "'primary'",
        description: ""
      },
      {
        name: "showBulkHeader",
        attr: "show-bulk-header",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showEmpty",
        attr: "show-empty",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showGroupFooter",
        attr: "show-group-footer",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showMinimap",
        attr: "show-minimap",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showSortingHeaders",
        attr: "show-sorting-headers",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"lg\" | \"md\" | \"sm\"",
        default: "'md'",
        description: "",
        options: [
          "lg",
          "md",
          "sm"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "stickyHeaders",
        attr: "sticky-headers",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "subheader",
        attr: "subheader",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "syncing",
        attr: "syncing",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"filled\" | \"outlined\" | \"soft\" | \"text\"",
        default: "'text'",
        description: "",
        options: [
          "filled",
          "outlined",
          "soft",
          "text"
        ]
      },
      {
        name: "viewTabs",
        type: "any[]",
        default: "[]",
        description: ""
      },
      {
        name: "virtual",
        attr: "virtual",
        type: "boolean",
        default: "false",
        description: ""
      }
    ],
    events: [
      {
        name: "bulkAction",
        detail: "{ action: string; values: string[]; }",
        description: ""
      },
      {
        name: "columnSort",
        detail: "{ key: string; direction: \"desc\" | \"asc\"; }",
        description: ""
      },
      {
        name: "itemsReorder",
        detail: "{ items: any[]; }",
        description: ""
      },
      {
        name: "listChange",
        detail: "{ values: string[]; }",
        description: ""
      },
      {
        name: "listItemSelect",
        detail: "{ value: string; values: string[]; shiftKey?: boolean; ctrlKey?: boolean; metaKey?: boolean; altKey?: boolean; }",
        description: ""
      },
      {
        name: "listStarToggle",
        detail: "{ value: string; starred: boolean; }",
        description: ""
      },
      {
        name: "loadMore",
        detail: "void",
        description: ""
      },
      {
        name: "longPress",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "pageChange",
        detail: "{ page: number; }",
        description: ""
      },
      {
        name: "searchChange",
        detail: "{ query: string; }",
        description: ""
      },
      {
        name: "swipeAction",
        detail: "{ value: string; side: LeftRight; action?: string; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-list checkbox-selection color=\"default\" dense></ui-list>",
      stencil: "<ui-list checkboxSelection={true} color=\"default\" dense={true}></ui-list>",
      react: "export default function Example() {\n  return <ui-list checkboxSelection color=\"default\" dense></ui-list>;\n}",
      angular: "<ui-list [checkboxSelection]=\"true\" color=\"default\" [dense]=\"true\"></ui-list>",
      vue: "<template>\n  <UiList :checkbox-selection=\"true\" color=\"default\" :dense=\"true\"></UiList>\n</template>"
    }
  },
  {
    id: "list-group",
    name: "List Group",
    tag: "ui-list-group",
    category: "Data Display",
    description: "List Group web component (<ui-list-group>).",
    totalProps: 12,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 237,
    color: "#22d3ee",
    props: [
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "badgeColor",
        attr: "badge-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "collapsible",
        attr: "collapsible",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "dense",
        attr: "dense",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "divider",
        attr: "divider",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "expanded",
        attr: "expanded",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "level",
        attr: "level",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "selectable",
        attr: "selectable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "selected",
        attr: "selected",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: ""
      }
    ],
    events: [
      {
        name: "groupClick",
        detail: "{ selected: boolean; expanded: boolean; }",
        description: ""
      },
      {
        name: "groupToggle",
        detail: "{ expanded: boolean; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-list-group badge-color=\"default\" collapsible dense></ui-list-group>",
      stencil: "<ui-list-group badge-color=\"default\" collapsible={true} dense={true}></ui-list-group>",
      react: "export default function Example() {\n  return <ui-list-group badge-color=\"default\" collapsible dense></ui-list-group>;\n}",
      angular: "<ui-list-group badge-color=\"default\" [collapsible]=\"true\" [dense]=\"true\"></ui-list-group>",
      vue: "<template>\n  <UiListGroup badge-color=\"default\" :collapsible=\"true\" :dense=\"true\"></UiListGroup>\n</template>"
    }
  },
  {
    id: "list-item",
    name: "List Item",
    tag: "ui-list-item",
    category: "Data Display",
    description: "List Item web component (<ui-list-item>).",
    totalProps: 71,
    totalEvents: 12,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 284,
    color: "#34d399",
    props: [
      {
        name: "a11yLabel",
        attr: "a-1-1y-label",
        type: "string",
        default: "''",
        description: "Interactive accessibility label"
      },
      {
        name: "actionIcon",
        attr: "action-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "auraMode",
        attr: "aura-mode",
        type: "boolean",
        default: "false",
        description: "Whether to show a background heatmap glow matching the status"
      },
      {
        name: "avatarGroup",
        attr: "avatar-group",
        type: "any[] | string",
        default: "''",
        description: "Multiple collaborators to show as an avatar group"
      },
      {
        name: "avatarGroupPosition",
        attr: "avatar-group-position",
        type: "\"content\" | \"media\" | \"right\"",
        default: "'content'",
        description: "Position of the avatar group: 'media' (leading), 'content' (below label), 'right' (after content)",
        options: [
          "content",
          "media",
          "right"
        ]
      },
      {
        name: "avatarPosition",
        attr: "avatar-position",
        type: "\"left\" | \"right\"",
        default: "'left'",
        description: "Position of the avatar/image (left or right)",
        options: [
          "left",
          "right"
        ]
      },
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "badgeColor",
        attr: "badge-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "checked",
        attr: "checked",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "collapsible",
        attr: "collapsible",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "contextMenu",
        attr: "context-menu",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "contextMenuPosition",
        attr: "context-menu-position",
        type: "\"auto\" | \"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'auto'",
        description: "",
        options: [
          "auto",
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "contextMenuTrigger",
        attr: "context-menu-trigger",
        type: "\"click\" | \"hover\" | \"rightClick\"",
        default: "'click'",
        description: "",
        options: [
          "click",
          "hover",
          "rightClick"
        ]
      },
      {
        name: "counter",
        attr: "counter",
        type: "number | string",
        default: "''",
        description: ""
      },
      {
        name: "counterColor",
        attr: "counter-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'success'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "dense",
        attr: "dense",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "density",
        attr: "density",
        type: "\"comfortable\" | \"compact\" | \"cozy\"",
        default: "'comfortable'",
        description: "Layout density mode",
        options: [
          "comfortable",
          "compact",
          "cozy"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "divider",
        attr: "divider",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "expandable",
        attr: "expandable",
        type: "boolean",
        default: "false",
        description: "Whether the item can be expanded to show more details"
      },
      {
        name: "expanded",
        attr: "expanded",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "expandedDetail",
        attr: "expanded-detail",
        type: "boolean",
        default: "false",
        description: "Whether the expansion detail is shown"
      },
      {
        name: "fullSwipeThreshold",
        attr: "full-swipe-threshold",
        type: "number",
        default: "0.75",
        description: "Threshold for full-swipe trigger (% of width)"
      },
      {
        name: "gridMode",
        attr: "grid-mode",
        type: "boolean",
        default: "false",
        description: "Whether the parent is in grid mode"
      },
      {
        name: "highlight",
        attr: "highlight",
        type: "string",
        default: "''",
        description: "Text to highlight (for search results)"
      },
      {
        name: "hoverColor",
        attr: "hover-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Custom hover color (primary, success, etc.)",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "href",
        attr: "href",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "image",
        attr: "image",
        type: "string",
        default: "''",
        description: "Image URL for a square/landscape thumbnail"
      },
      {
        name: "interactive",
        attr: "interactive",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "leftActionColor",
        attr: "left-action-color",
        type: "string",
        default: "'success'",
        description: ""
      },
      {
        name: "leftActionIcon",
        attr: "left-action-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "leftActions",
        type: "any[]",
        default: "[]",
        description: "Multiple actions for left swipe reveal [{icon, color, action}]"
      },
      {
        name: "level",
        attr: "level",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "locked",
        attr: "locked",
        type: "boolean",
        default: "false",
        description: "Whether the item is locked"
      },
      {
        name: "longPressDelay",
        attr: "long-press-delay",
        type: "number",
        default: "600",
        description: "Delay for long press event (ms)"
      },
      {
        name: "metadata",
        attr: "metadata",
        type: "any",
        default: "{}",
        description: "Custom metadata for Ghost Layer {ip, id, etc.}"
      },
      {
        name: "multiline",
        attr: "multiline",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "nested",
        attr: "nested",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "presence",
        type: "any[]",
        default: "[]",
        description: "Collaborative presence data [{id, color}]"
      },
      {
        name: "presenceCursors",
        type: "any[]",
        default: "[]",
        description: "Professional presence cursors [{name, color, x, y}]"
      },
      {
        name: "priorityPulse",
        attr: "priority-pulse",
        type: "boolean",
        default: "false",
        description: "Whether to show a pulsating ambient glow for high priority"
      },
      {
        name: "progress",
        attr: "progress",
        type: "number",
        default: "-1",
        description: "Progress percentage (0-100), -1 to disable"
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "rightActionColor",
        attr: "right-action-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'danger'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "rightActionIcon",
        attr: "right-action-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "rightActions",
        type: "any[]",
        default: "[]",
        description: "Multiple actions for right swipe reveal [{icon, color, action}]"
      },
      {
        name: "selected",
        attr: "selected",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "selectionColor",
        attr: "selection-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Custom selection color (primary, success, etc.)",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "showCheckbox",
        attr: "show-checkbox",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showGhostLayer",
        attr: "show-ghost-layer",
        type: "boolean",
        default: "false",
        description: "Whether to show the Ghost Layer (Alt mode)"
      },
      {
        name: "showMenu",
        attr: "show-menu",
        type: "boolean",
        default: "false",
        description: "Whether to show a 3-dot action menu icon"
      },
      {
        name: "showStar",
        attr: "show-star",
        type: "boolean",
        default: "false",
        description: "Whether to show the star icon"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "Whether to show as a loading skeleton"
      },
      {
        name: "sparkline",
        type: "number[]",
        default: "[]",
        description: "Mini sparkline data [10, 50, 20...]"
      },
      {
        name: "starred",
        attr: "starred",
        type: "boolean",
        default: "false",
        description: "Whether the item is starred/favorited"
      },
      {
        name: "status",
        attr: "status",
        type: "\"\" | \"away\" | \"busy\" | \"offline\" | \"online\"",
        default: "''",
        description: "Presence status: 'online', 'offline', 'busy', 'away'",
        options: [
          "away",
          "busy",
          "offline",
          "online"
        ]
      },
      {
        name: "statusPosition",
        attr: "status-position",
        type: "\"bottom-right\" | \"top-right\"",
        default: "'bottom-right'",
        description: "Position of the status dot",
        options: [
          "bottom-right",
          "top-right"
        ]
      },
      {
        name: "sublabel",
        attr: "sublabel",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "swipeActions",
        attr: "swipe-actions",
        type: "boolean",
        default: "false",
        description: "Enable swipe actions (mobile)"
      },
      {
        name: "swipeBehavior",
        attr: "swipe-behavior",
        type: "\"dismiss\" | \"reveal\"",
        default: "'reveal'",
        description: "Swipe behavior: 'reveal' or 'dismiss'",
        options: [
          "dismiss",
          "reveal"
        ]
      },
      {
        name: "tags",
        attr: "tags",
        type: "any[] | string",
        default: "''",
        description: "JSON string or array of tag objects"
      },
      {
        name: "target",
        attr: "target",
        type: "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
        default: "'_self'",
        description: "",
        options: [
          "_blank",
          "_parent",
          "_self",
          "_top"
        ]
      },
      {
        name: "treeLines",
        attr: "tree-lines",
        type: "boolean",
        default: "false",
        description: "Whether to show hierarchical connection lines (tree view)"
      },
      {
        name: "userAvatar",
        attr: "user-avatar",
        type: "string",
        default: "''",
        description: "User avatar URL"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"filled\" | \"outlined\" | \"soft\" | \"text\"",
        default: "'text'",
        description: "",
        options: [
          "filled",
          "outlined",
          "soft",
          "text"
        ]
      },
      {
        name: "wobble",
        attr: "wobble",
        type: "boolean",
        default: "false",
        description: "Whether the item is currently shaking/wobbling (visual haptic)"
      }
    ],
    events: [
      {
        name: "checkboxChange",
        detail: "{ value: string; checked: boolean; }",
        description: ""
      },
      {
        name: "contextMenuCloseEvent",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "contextMenuOpenEvent",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "detailToggle",
        detail: "{ value: string; expanded: boolean; }",
        description: ""
      },
      {
        name: "listItemActionClick",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "listItemClick",
        detail: "{ value: string; selected: boolean; shiftKey?: boolean; ctrlKey?: boolean; metaKey?: boolean; altKey?: boolean; }",
        description: ""
      },
      {
        name: "listItemToggle",
        detail: "{ value: string; expanded: boolean; }",
        description: ""
      },
      {
        name: "longPress",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "pillClick",
        detail: "{ value: string; label: string; index: number; pill: any; }",
        description: ""
      },
      {
        name: "starToggle",
        detail: "{ value: string; starred: boolean; }",
        description: ""
      },
      {
        name: "swipeAction",
        detail: "{ value: string; side: LeftRight; action?: string; }",
        description: ""
      },
      {
        name: "tagClick",
        detail: "{ value: string; label: string; index: number; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-list-item aura-mode avatar-group-position=\"content\" avatar-position=\"left\"></ui-list-item>",
      stencil: "<ui-list-item auraMode={true} avatar-group-position=\"content\" avatar-position=\"left\"></ui-list-item>",
      react: "export default function Example() {\n  return <ui-list-item auraMode avatar-group-position=\"content\" avatar-position=\"left\"></ui-list-item>;\n}",
      angular: "<ui-list-item [auraMode]=\"true\" avatar-group-position=\"content\" avatar-position=\"left\"></ui-list-item>",
      vue: "<template>\n  <UiListItem :aura-mode=\"true\" avatar-group-position=\"content\" avatar-position=\"left\"></UiListItem>\n</template>"
    }
  },
  {
    id: "loader",
    name: "Loader",
    tag: "ui-loader",
    category: "Feedback",
    description: "Loader web component (<ui-loader>).",
    totalProps: 32,
    totalEvents: 2,
    variantsCount: 5,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 331,
    color: "#f472b6",
    props: [
      {
        name: "ariaLabel",
        attr: "aria-label",
        type: "string",
        default: "'Loading...'",
        description: "Accessibility ARIA label"
      },
      {
        name: "ariaLive",
        attr: "aria-live",
        type: "\"assertive\" | \"off\" | \"polite\"",
        default: "'polite'",
        description: "ARIA live region mode",
        options: [
          "assertive",
          "off",
          "polite"
        ]
      },
      {
        name: "backdropBlur",
        attr: "blur",
        type: "boolean",
        default: "false",
        description: "Apply background blur (glassmorphic backdrop)"
      },
      {
        name: "color",
        attr: "color",
        type: "string",
        default: "'primary'",
        description: "Semantic color variant ('primary', 'secondary', etc.) or custom hex/gradient string"
      },
      {
        name: "completedLabel",
        attr: "completed-label",
        type: "string",
        default: "'Completed'",
        description: "Label used when status is completed."
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "",
        description: "Sub-label description text"
      },
      {
        name: "enableBlur",
        attr: "enable-blur",
        type: "boolean",
        default: "false",
        description: "Alias for blur attribute used in demo configuration"
      },
      {
        name: "errorLabel",
        attr: "error-label",
        type: "string",
        default: "'Error'",
        description: "Label used when status is error."
      },
      {
        name: "fullscreen",
        attr: "fullscreen",
        type: "boolean",
        default: "false",
        description: "Displays the loader as a full viewport overlay"
      },
      {
        name: "image",
        attr: "image",
        type: "string",
        default: "",
        description: "Image URL when using type=\"image\""
      },
      {
        name: "interruptedLabel",
        attr: "interrupted-label",
        type: "string",
        default: "'Interrupted'",
        description: "Label used when status is interrupted."
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Text label to display alongside the loader animation"
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'bottom'",
        description: "Position of the label relative to the loading animation",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "loadingLabel",
        attr: "loading-label",
        type: "string",
        default: "",
        description: "Label used while status is loading. Falls back to label/messages when not set."
      },
      {
        name: "messageInterval",
        attr: "message-interval",
        type: "number",
        default: "2500",
        description: "Rotation interval time in milliseconds"
      },
      {
        name: "messages",
        attr: "messages",
        type: "string | string[]",
        default: "",
        description: "Array of status messages to rotate through automatically"
      },
      {
        name: "overlay",
        attr: "overlay",
        type: "boolean",
        default: "false",
        description: "Displays the loader as an absolute overlay over its relative parent container"
      },
      {
        name: "overlayBackground",
        attr: "overlay-background",
        type: "string",
        default: "",
        description: "Custom background color/gradient for overlay mode"
      },
      {
        name: "overlayOpacity",
        attr: "overlay-opacity",
        type: "number",
        default: "0.5",
        description: "Opacity value of the overlay backdrop (0 to 1)"
      },
      {
        name: "predictive",
        attr: "predictive",
        type: "boolean",
        default: "false",
        description: "Enables simulated predictive non-linear crawling progress up to 95%"
      },
      {
        name: "rainColumns",
        attr: "rain-columns",
        type: "number",
        default: "5",
        description: "Number of columns in Matrix digital rain"
      },
      {
        name: "rainText",
        attr: "rain-text",
        type: "string",
        default: "",
        description: "Letters pool for Matrix matrix-rain animation"
      },
      {
        name: "size",
        attr: "size",
        type: "string",
        default: "'md'",
        description: "Size of the loader preset ('3xs'...'jumbo') or custom CSS value ('120px', '4rem')"
      },
      {
        name: "speed",
        attr: "speed",
        type: "\"fast\" | \"normal\" | \"slow\"",
        default: "'normal'",
        description: "Speed of animation cycle",
        options: [
          "fast",
          "normal",
          "slow"
        ]
      },
      {
        name: "status",
        attr: "status",
        type: "\"completed\" | \"error\" | \"interrupted\" | \"loading\" | \"success\"",
        default: "'loading'",
        description: "Current loading status state",
        options: [
          "completed",
          "error",
          "interrupted",
          "loading",
          "success"
        ]
      },
      {
        name: "successLabel",
        attr: "success-label",
        type: "string",
        default: "",
        description: "Alias label used when status is success."
      },
      {
        name: "thickness",
        attr: "thickness",
        type: "number",
        default: "3",
        description: "Stroke width thickness for circular loaders (spinner, ring)"
      },
      {
        name: "trapFocus",
        attr: "trap-focus",
        type: "boolean",
        default: "false",
        description: "Traps keyboard focus inside the loader overlay (useful for fullscreen modals)"
      },
      {
        name: "type",
        attr: "type",
        type: "string",
        default: "'spinner'",
        description: "The animation style variant type (34 total variants)"
      },
      {
        name: "value",
        attr: "value",
        type: "number",
        default: "",
        description: "Determinate state progress value (0 to 100)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"glass\" | \"linear-strip\" | \"minimal\" | \"neon\" | \"standard\"",
        default: "'standard'",
        description: "Loader style theme variant",
        options: [
          "glass",
          "linear-strip",
          "minimal",
          "neon",
          "standard"
        ]
      },
      {
        name: "visible",
        attr: "visible",
        type: "boolean",
        default: "true",
        description: "Whether the loader is visible"
      }
    ],
    events: [
      {
        name: "uiHide",
        detail: "void",
        description: ""
      },
      {
        name: "uiShow",
        detail: "void",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-loader aria-live=\"polite\" blur enable-blur></ui-loader>",
      stencil: "<ui-loader aria-live=\"polite\" backdropBlur={true} enableBlur={true}></ui-loader>",
      react: "export default function Example() {\n  return <ui-loader aria-live=\"polite\" backdropBlur enableBlur></ui-loader>;\n}",
      angular: "<ui-loader aria-live=\"polite\" [backdropBlur]=\"true\" [enableBlur]=\"true\"></ui-loader>",
      vue: "<template>\n  <UiLoader aria-live=\"polite\" :blur=\"true\" :enable-blur=\"true\"></UiLoader>\n</template>"
    }
  },
  {
    id: "masonry",
    name: "Masonry",
    tag: "ui-masonry",
    category: "Data Display",
    description: "A flexible masonry/grid layout component with filtering, sorting, selection, lazy loading, and infinite scroll support.",
    totalProps: 24,
    totalEvents: 7,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 18,
    color: "#fbbf24",
    props: [
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "300",
        description: ""
      },
      {
        name: "breakpoints",
        attr: "breakpoints",
        type: "string",
        default: "'{\"640\":2,\"768\":3,\"1024\":4,\"1280\":5}'",
        description: ""
      },
      {
        name: "columns",
        attr: "columns",
        type: "number",
        default: "3",
        description: ""
      },
      {
        name: "emptyMessage",
        attr: "empty-message",
        type: "string",
        default: "'No items to display'",
        description: ""
      },
      {
        name: "enableAnimation",
        attr: "enable-animation",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "filterBy",
        attr: "filter-by",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "filterOptions",
        attr: "filter-options",
        type: "string | { key: string; label: string; }[]",
        default: "[]",
        description: ""
      },
      {
        name: "gap",
        attr: "gap",
        type: "number",
        default: "16",
        description: ""
      },
      {
        name: "infiniteScroll",
        attr: "infinite-scroll",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "infiniteScrollDistance",
        attr: "infinite-scroll-distance",
        type: "number",
        default: "200",
        description: ""
      },
      {
        name: "itemMaxWidth",
        attr: "item-max-width",
        type: "number",
        default: "400",
        description: ""
      },
      {
        name: "itemMinWidth",
        attr: "item-min-width",
        type: "number",
        default: "200",
        description: ""
      },
      {
        name: "items",
        attr: "items",
        type: "any[] | string",
        default: "[]",
        description: ""
      },
      {
        name: "layoutType",
        attr: "layout-type",
        type: "\"columns\" | \"grid\" | \"masonry\"",
        default: "'masonry'",
        description: "",
        options: [
          "columns",
          "grid",
          "masonry"
        ]
      },
      {
        name: "lazyLoad",
        attr: "lazy-load",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "lazyLoadMargin",
        attr: "lazy-load-margin",
        type: "string",
        default: "'200px'",
        description: ""
      },
      {
        name: "lightbox",
        attr: "lightbox",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "loadingState",
        attr: "loading-state",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "multiSelect",
        attr: "multi-select",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "selectable",
        attr: "selectable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showBatchActions",
        attr: "show-batch-actions",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showFilters",
        attr: "show-filters",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "sortBy",
        attr: "sort-by",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "sortOrder",
        attr: "sort-order",
        type: "\"asc\" | \"desc\"",
        default: "'asc'",
        description: "",
        options: [
          "asc",
          "desc"
        ]
      }
    ],
    events: [
      {
        name: "batchDelete",
        detail: "{ items: any[]; indices: number[]; }",
        description: ""
      },
      {
        name: "filterChange",
        detail: "{ filterBy: string; value: string; }",
        description: ""
      },
      {
        name: "itemClick",
        detail: "any",
        description: ""
      },
      {
        name: "itemSelectionChange",
        detail: "{ selectedItems: any[]; indices: number[]; }",
        description: ""
      },
      {
        name: "itemsLoaded",
        detail: "{ count: number; total: number; }",
        description: ""
      },
      {
        name: "layoutChange",
        detail: "{ layoutType: string; columns: number; }",
        description: ""
      },
      {
        name: "sortChange",
        detail: "{ sortBy: string; order: string; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-masonry infinite-scroll layout-type=\"masonry\" lazy-load></ui-masonry>",
      stencil: "<ui-masonry infiniteScroll={true} layout-type=\"masonry\" lazyLoad={true}></ui-masonry>",
      react: "export default function Example() {\n  return <ui-masonry infiniteScroll layout-type=\"masonry\" lazyLoad></ui-masonry>;\n}",
      angular: "<ui-masonry [infiniteScroll]=\"true\" layout-type=\"masonry\" [lazyLoad]=\"true\"></ui-masonry>",
      vue: "<template>\n  <UiMasonry :infinite-scroll=\"true\" layout-type=\"masonry\" :lazy-load=\"true\"></UiMasonry>\n</template>"
    }
  },
  {
    id: "meter-group",
    name: "Meter Group",
    tag: "ui-meter-group",
    category: "Data Display",
    description: "Meter Group web component (<ui-meter-group>).",
    totalProps: 12,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 65,
    color: "#fb7185",
    props: [
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: "Enable animations for value changes"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "interactive",
        attr: "interactive",
        type: "boolean",
        default: "false",
        description: "Interactive mode (clickable segments/legend)"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "100",
        description: "Maximum value"
      },
      {
        name: "min",
        attr: "min",
        type: "number",
        default: "0",
        description: "Minimum value"
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation of the meter",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"line\"",
        default: "'line'",
        description: "Shape of the meter",
        options: [
          "circle",
          "line"
        ]
      },
      {
        name: "showLabels",
        attr: "show-labels",
        type: "boolean",
        default: "true",
        description: "Show labels"
      },
      {
        name: "showLegend",
        attr: "show-legend",
        type: "boolean",
        default: "false",
        description: "Show legend"
      },
      {
        name: "showValues",
        attr: "show-values",
        type: "boolean",
        default: "true",
        description: "Show values"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Height/thickness of the meter",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "values",
        attr: "values",
        type: "MeterValue[] | string",
        default: "[]",
        description: "Array of meter values"
      }
    ],
    events: [
      {
        name: "meterClick",
        detail: "MeterValue",
        description: "Emitted when a meter segment or legend item is clicked"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-meter-group icon-library=\"default\" interactive orientation=\"horizontal\"></ui-meter-group>",
      stencil: "<ui-meter-group icon-library=\"default\" interactive={true} orientation=\"horizontal\"></ui-meter-group>",
      react: "export default function Example() {\n  return <ui-meter-group icon-library=\"default\" interactive orientation=\"horizontal\"></ui-meter-group>;\n}",
      angular: "<ui-meter-group icon-library=\"default\" [interactive]=\"true\" orientation=\"horizontal\"></ui-meter-group>",
      vue: "<template>\n  <UiMeterGroup icon-library=\"default\" :interactive=\"true\" orientation=\"horizontal\"></UiMeterGroup>\n</template>"
    }
  },
  {
    id: "multi-cascading-dropdown",
    name: "Multi Cascading Dropdown",
    tag: "ui-multi-cascading-dropdown",
    category: "Forms",
    description: "Multi Cascading Dropdown web component (<ui-multi-cascading-dropdown>).",
    totalProps: 4,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 112,
    color: "#38bdf8",
    props: [
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "options",
        attr: "options",
        type: "DropdownItem[] | string",
        default: "[]",
        description: "The data structure for the dropdown"
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "'Select options'",
        description: "Placeholder text for the trigger"
      },
      {
        name: "value",
        type: "string[]",
        default: "[]",
        description: "Array of selected values"
      }
    ],
    events: [
      {
        name: "valueChange",
        detail: "MultiCascadingDropdownChangeEvent",
        description: "Emits when selection changes"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-multi-cascading-dropdown disabled></ui-multi-cascading-dropdown>",
      stencil: "<ui-multi-cascading-dropdown disabled={true}></ui-multi-cascading-dropdown>",
      react: "export default function Example() {\n  return <ui-multi-cascading-dropdown disabled></ui-multi-cascading-dropdown>;\n}",
      angular: "<ui-multi-cascading-dropdown [disabled]=\"true\"></ui-multi-cascading-dropdown>",
      vue: "<template>\n  <UiMultiCascadingDropdown :disabled=\"true\"></UiMultiCascadingDropdown>\n</template>"
    }
  },
  {
    id: "navigation-bar",
    name: "Navigation Bar",
    tag: "ui-navigation-bar",
    category: "Navigation",
    description: "Navigation Bar web component (<ui-navigation-bar>).",
    totalProps: 22,
    totalEvents: 6,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 159,
    color: "#818cf8",
    props: [
      {
        name: "accordion",
        attr: "accordion",
        type: "boolean",
        default: "false",
        description: "Accordion mode: one expanded at a time"
      },
      {
        name: "activeId",
        attr: "active-id",
        type: "string",
        default: "",
        description: "ID of the currently active item (route aware)"
      },
      {
        name: "bottomItems",
        type: "NavigationItem[]",
        default: "[]",
        description: "Bottom items data source"
      },
      {
        name: "bottomItemsSecondary",
        type: "NavigationItem[]",
        default: "[]",
        description: "Secondary bottom items data source"
      },
      {
        name: "categories",
        type: "NavigationItem[]",
        default: "[]",
        description: "Secondary data source: Categories to show at the top"
      },
      {
        name: "collapsedWidth",
        attr: "collapsed-width",
        type: "string",
        default: "'64px'",
        description: "Width when collapsed (css unit)"
      },
      {
        name: "collapsible",
        attr: "collapsible",
        type: "boolean",
        default: "true",
        description: "Whether the navigation is collapsible"
      },
      {
        name: "companyLogo",
        attr: "company-logo",
        type: "string",
        default: "",
        description: "Company Logo URL"
      },
      {
        name: "companyName",
        attr: "company-name",
        type: "string",
        default: "",
        description: "Company Name"
      },
      {
        name: "density",
        attr: "density",
        type: "\"comfortable\" | \"compact\"",
        default: "'comfortable'",
        description: "Density of items",
        options: [
          "comfortable",
          "compact"
        ]
      },
      {
        name: "expandedWidth",
        attr: "expanded-width",
        type: "string",
        default: "'280px'",
        description: "Width when expanded (css unit)"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "iconOnly",
        attr: "icon-only",
        type: "boolean",
        default: "true",
        description: "Show only icons in collapsed mode"
      },
      {
        name: "indicatorPosition",
        attr: "indicator-position",
        type: "\"end\" | \"start\"",
        default: "'start'",
        description: "Position of the active item indicator bar: 'start' (left) or 'end' (right)",
        options: [
          "end",
          "start"
        ]
      },
      {
        name: "items",
        type: "NavigationItem[]",
        default: "[]",
        description: "Main data source: Array of navigation items"
      },
      {
        name: "maxItems",
        attr: "max-items",
        type: "number",
        default: "100",
        description: "Maximum number of items to show before overflowing to \"More\" menu"
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"auto\" | \"collapsed\" | \"expanded\"",
        default: "'collapsed'",
        description: "Mode of the navigation",
        options: [
          "auto",
          "collapsed",
          "expanded"
        ]
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "Layout orientation",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "position",
        attr: "position",
        type: "\"left\" | \"right\"",
        default: "'left'",
        description: "Positioning of the navigation",
        options: [
          "left",
          "right"
        ]
      },
      {
        name: "secondaryItems",
        type: "NavigationItem[]",
        default: "[]",
        description: "Secondary items data source"
      },
      {
        name: "showSearch",
        attr: "show-search",
        type: "boolean",
        default: "false",
        description: "Show search bar in expanded mode"
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"auto\" | \"dark\" | \"green\" | \"light\"",
        default: "'auto'",
        description: "Theme preference (just sets a class or attribute)",
        options: [
          "auto",
          "dark",
          "green",
          "light"
        ]
      }
    ],
    events: [
      {
        name: "itemCollapse",
        detail: "string",
        description: ""
      },
      {
        name: "itemExpand",
        detail: "string",
        description: ""
      },
      {
        name: "navClose",
        detail: "void",
        description: ""
      },
      {
        name: "navItemClick",
        detail: "NavigationItem",
        description: ""
      },
      {
        name: "navOpen",
        detail: "void",
        description: ""
      },
      {
        name: "navToggle",
        detail: "{ expanded: boolean; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-navigation-bar accordion density=\"comfortable\" icon-library=\"default\"></ui-navigation-bar>",
      stencil: "<ui-navigation-bar accordion={true} density=\"comfortable\" icon-library=\"default\"></ui-navigation-bar>",
      react: "export default function Example() {\n  return <ui-navigation-bar accordion density=\"comfortable\" icon-library=\"default\"></ui-navigation-bar>;\n}",
      angular: "<ui-navigation-bar [accordion]=\"true\" density=\"comfortable\" icon-library=\"default\"></ui-navigation-bar>",
      vue: "<template>\n  <UiNavigationBar :accordion=\"true\" density=\"comfortable\" icon-library=\"default\"></UiNavigationBar>\n</template>"
    }
  },
  {
    id: "navigation-item",
    name: "Navigation Item",
    tag: "ui-navigation-item",
    category: "Navigation",
    description: "Navigation Item web component (<ui-navigation-item>).",
    totalProps: 10,
    totalEvents: 3,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 206,
    color: "#a855f7",
    props: [
      {
        name: "active",
        attr: "active",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "activeId",
        attr: "active-id",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "350",
        description: ""
      },
      {
        name: "collapsed",
        attr: "collapsed",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "forcePopover",
        attr: "force-popover",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "indentation",
        attr: "indentation",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "item",
        type: "NavigationItem",
        default: "",
        description: ""
      },
      {
        name: "open",
        attr: "open",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "",
        options: [
          "horizontal",
          "vertical"
        ]
      }
    ],
    events: [
      {
        name: "navItemClick",
        detail: "NavigationItem",
        description: ""
      },
      {
        name: "popoverStateChange",
        detail: "boolean",
        description: ""
      },
      {
        name: "submenuToggle",
        detail: "string",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-navigation-item active collapsed force-popover></ui-navigation-item>",
      stencil: "<ui-navigation-item active={true} collapsed={true} forcePopover={true}></ui-navigation-item>",
      react: "export default function Example() {\n  return <ui-navigation-item active collapsed forcePopover></ui-navigation-item>;\n}",
      angular: "<ui-navigation-item [active]=\"true\" [collapsed]=\"true\" [forcePopover]=\"true\"></ui-navigation-item>",
      vue: "<template>\n  <UiNavigationItem :active=\"true\" :collapsed=\"true\" :force-popover=\"true\"></UiNavigationItem>\n</template>"
    }
  },
  {
    id: "number-input",
    name: "Number Input",
    tag: "ui-number-input",
    category: "Forms",
    description: "Number Input web component (<ui-number-input>).",
    totalProps: 23,
    totalEvents: 2,
    variantsCount: 2,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 253,
    color: "#22d3ee",
    props: [
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "errorText",
        attr: "error-text",
        type: "string",
        default: "''",
        description: "Error text — also sets error state"
      },
      {
        name: "fullWidth",
        attr: "full-width",
        type: "boolean",
        default: "false",
        description: "Full width"
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: "Helper text below input"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label text"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "Infinity",
        description: "Maximum value"
      },
      {
        name: "min",
        attr: "min",
        type: "number",
        default: "-Infinity",
        description: "Minimum value"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "",
        description: "Name of the input"
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "'0'",
        description: "Placeholder"
      },
      {
        name: "precision",
        attr: "precision",
        type: "number",
        default: "-1",
        description: "Number of decimal places (-1 = no rounding)"
      },
      {
        name: "prefixIcon",
        attr: "prefix-icon",
        type: "string",
        default: "''",
        description: "Prefix icon to display"
      },
      {
        name: "prefixText",
        attr: "prefix-text",
        type: "string",
        default: "''",
        description: "Prefix text/symbol (e.g. '$')"
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: "Readonly state"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "scrollWheel",
        attr: "scroll-wheel",
        type: "boolean",
        default: "true",
        description: "Keyboard shortcut: scroll wheel to change value"
      },
      {
        name: "showStepper",
        attr: "show-stepper",
        type: "boolean",
        default: "false",
        description: "Show stepper buttons"
      },
      {
        name: "showTypeIcon",
        attr: "show-type-icon",
        type: "boolean",
        default: "false",
        description: "Whether to show the type-based prefix icon (e.g. hash for numbers)"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Size variant",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "step",
        attr: "step",
        type: "number",
        default: "1",
        description: "Step amount"
      },
      {
        name: "stepperLayout",
        attr: "stepper-layout",
        type: "\"none\" | \"right\" | \"sides\"",
        default: "'sides'",
        description: "Controls layout of stepper: 'sides' | 'right' | 'none'",
        options: [
          "none",
          "right",
          "sides"
        ]
      },
      {
        name: "suffixText",
        attr: "suffix-text",
        type: "string",
        default: "''",
        description: "Suffix text/symbol (e.g. 'kg')"
      },
      {
        name: "value",
        attr: "value",
        type: "number",
        default: "0",
        description: "Current value"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"plain\"",
        default: "'default'",
        description: "Style variant",
        options: [
          "default",
          "plain"
        ]
      }
    ],
    events: [
      {
        name: "numberChange",
        detail: "number",
        description: ""
      },
      {
        name: "numberInput",
        detail: "number",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-number-input disabled full-width readonly></ui-number-input>",
      stencil: "<ui-number-input disabled={true} fullWidth={true} readonly={true}></ui-number-input>",
      react: "export default function Example() {\n  return <ui-number-input disabled fullWidth readonly></ui-number-input>;\n}",
      angular: "<ui-number-input [disabled]=\"true\" [fullWidth]=\"true\" [readonly]=\"true\"></ui-number-input>",
      vue: "<template>\n  <UiNumberInput :disabled=\"true\" :full-width=\"true\" :readonly=\"true\"></UiNumberInput>\n</template>"
    }
  },
  {
    id: "otp-input",
    name: "Otp Input",
    tag: "ui-otp-input",
    category: "Forms",
    description: "Otp Input web component (<ui-otp-input>).",
    totalProps: 22,
    totalEvents: 4,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 300,
    color: "#34d399",
    props: [
      {
        name: "autoFocus",
        attr: "auto-focus",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "autoSubmit",
        attr: "auto-submit",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "color",
        attr: "color",
        type: "\"danger\" | \"info\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        default: "'primary'",
        description: "",
        options: [
          "danger",
          "info",
          "primary",
          "secondary",
          "success",
          "warning"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "errorText",
        attr: "error-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "groupSize",
        attr: "group-size",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "length",
        attr: "length",
        type: "number",
        default: "6",
        description: ""
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "resendInterval",
        attr: "resend-interval",
        type: "number",
        default: "60",
        description: "Resend interval in seconds"
      },
      {
        name: "resendLabel",
        attr: "resend-label",
        type: "string",
        default: "'Resend Code'",
        description: "Custom label for resend button"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "secure",
        attr: "secure",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"lg\" | \"md\" | \"sm\"",
        default: "'md'",
        description: "",
        options: [
          "lg",
          "md",
          "sm"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "type",
        attr: "type",
        type: "\"alphanumeric\" | \"number\" | \"numeric\" | \"password\" | \"text\"",
        default: "'number'",
        description: "",
        options: [
          "alphanumeric",
          "number",
          "numeric",
          "password",
          "text"
        ]
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"flushed\" | \"separated\" | \"underlined\"",
        default: "'default'",
        description: "",
        options: [
          "default",
          "flushed",
          "separated",
          "underlined"
        ]
      }
    ],
    events: [
      {
        name: "otpChange",
        detail: "{ value: string; complete: boolean; }",
        description: ""
      },
      {
        name: "otpComplete",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "otpSubmit",
        detail: "{ value: string; }",
        description: ""
      },
      {
        name: "resendClick",
        detail: "void",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-otp-input auto-submit color=\"primary\" disabled></ui-otp-input>",
      stencil: "<ui-otp-input autoSubmit={true} color=\"primary\" disabled={true}></ui-otp-input>",
      react: "export default function Example() {\n  return <ui-otp-input autoSubmit color=\"primary\" disabled></ui-otp-input>;\n}",
      angular: "<ui-otp-input [autoSubmit]=\"true\" color=\"primary\" [disabled]=\"true\"></ui-otp-input>",
      vue: "<template>\n  <UiOtpInput :auto-submit=\"true\" color=\"primary\" :disabled=\"true\"></UiOtpInput>\n</template>"
    }
  },
  {
    id: "pagination",
    name: "Pagination",
    tag: "ui-pagination",
    category: "Navigation",
    description: "Pagination web component (<ui-pagination>).",
    totalProps: 57,
    totalEvents: 3,
    variantsCount: 10,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 347,
    color: "#f472b6",
    props: [
      {
        name: "arrowsJoined",
        attr: "arrows-joined",
        type: "boolean",
        default: "false",
        description: "Only join navigation arrows (prev/next) together"
      },
      {
        name: "autoHide",
        attr: "auto-hide",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "circle",
        attr: "circle",
        type: "boolean",
        default: "false",
        description: "Circle-shaped buttons (shorthand for shape=\"circle\")"
      },
      {
        name: "compact",
        attr: "compact",
        type: "boolean",
        default: "false",
        description: "Whether to use compact mode (for dropdown and input types)"
      },
      {
        name: "currentPage",
        attr: "current-page",
        type: "number",
        default: "1",
        description: "Current active page (1-based)"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether pagination is disabled"
      },
      {
        name: "ellipsisTooltip",
        attr: "ellipsis-tooltip",
        type: "boolean",
        default: "true",
        description: "Show tooltip on ellipsis hover with hidden page numbers"
      },
      {
        name: "firstIcon",
        attr: "first-icon",
        type: "string",
        default: "''",
        description: "Custom first icon (emoji or SVG string)"
      },
      {
        name: "firstText",
        attr: "first-text",
        type: "string",
        default: "'First'",
        description: "Custom text for first button"
      },
      {
        name: "hideNavButtons",
        attr: "hide-nav-buttons",
        type: "boolean",
        default: "false",
        description: "Hide navigation buttons (next, previous, first, last) in dropdown/input modes"
      },
      {
        name: "hideNumbers",
        attr: "hide-numbers",
        type: "boolean",
        default: "false",
        description: "Hide page number buttons completely"
      },
      {
        name: "iconOnly",
        attr: "icon-only",
        type: "boolean",
        default: "false",
        description: "Whether to show only icons (no text labels)"
      },
      {
        name: "infinite",
        attr: "infinite",
        type: "boolean",
        default: "false",
        description: "Whether to use infinite scroll style (shows loading state)"
      },
      {
        name: "itemsPerPage",
        attr: "items-per-page",
        type: "number",
        default: "10",
        description: "Number of items per page"
      },
      {
        name: "keyboardNav",
        attr: "keyboard-nav",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation"
      },
      {
        name: "labelTemplate",
        attr: "label-template",
        type: "string",
        default: "'{current} OF {total}'",
        description: "Template for the label when showLabel is true. Uses {current} and {total} placeholders."
      },
      {
        name: "lastIcon",
        attr: "last-icon",
        type: "string",
        default: "''",
        description: "Custom last icon (emoji or SVG string)"
      },
      {
        name: "lastText",
        attr: "last-text",
        type: "string",
        default: "'Last'",
        description: "Custom text for last button"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state for infinite scroll"
      },
      {
        name: "maxVisiblePages",
        attr: "max-visible-pages",
        type: "number",
        default: "5",
        description: "Maximum number of page buttons to show"
      },
      {
        name: "mobileBreakpoint",
        attr: "mobile-breakpoint",
        type: "number",
        default: "768",
        description: "Mobile breakpoint (px)"
      },
      {
        name: "nextIcon",
        attr: "next-icon",
        type: "string",
        default: "''",
        description: "Custom next icon (emoji or SVG string)"
      },
      {
        name: "nextText",
        attr: "next-text",
        type: "string",
        default: "'Next'",
        description: "Custom text for next button"
      },
      {
        name: "pageSizes",
        type: "number[]",
        default: "[10, 25, 50, 100]",
        description: "Available page sizes for selector"
      },
      {
        name: "pageTransition",
        attr: "page-transition",
        type: "boolean",
        default: "true",
        description: "Enable page transition animations"
      },
      {
        name: "persistPage",
        attr: "persist-page",
        type: "boolean",
        default: "false",
        description: "Persist page to localStorage"
      },
      {
        name: "pill",
        attr: "pill",
        type: "boolean",
        default: "false",
        description: "Pill-shaped buttons (shorthand for shape=\"pill\")"
      },
      {
        name: "prevIcon",
        attr: "prev-icon",
        type: "string",
        default: "''",
        description: "Custom prev icon (emoji or SVG string)"
      },
      {
        name: "prevText",
        attr: "prev-text",
        type: "string",
        default: "'Previous'",
        description: "Custom text for previous button"
      },
      {
        name: "quickJump",
        attr: "quick-jump",
        type: "boolean",
        default: "false",
        description: "Enable quick jump buttons (+5, -5)"
      },
      {
        name: "quickJumpStep",
        attr: "quick-jump-step",
        type: "number",
        default: "5",
        description: "Quick jump step size"
      },
      {
        name: "responsiveMode",
        attr: "responsive-mode",
        type: "boolean",
        default: "true",
        description: "Auto-switch to compact mode on mobile"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "segmented",
        attr: "segmented",
        type: "boolean",
        default: "false",
        description: "Layout buttons without gaps, inside a single border-radius container"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'default'",
        description: "",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showFirstLast",
        attr: "show-first-last",
        type: "boolean",
        default: "true",
        description: "Whether to show first/last buttons"
      },
      {
        name: "showJumpTo",
        attr: "show-jump-to",
        type: "boolean",
        default: "false",
        description: "Whether to show jump to page input"
      },
      {
        name: "showLabel",
        attr: "show-label",
        type: "boolean",
        default: "false",
        description: "Show custom label (e.g. \"3 OF 10\") instead of or alongside numbers"
      },
      {
        name: "showPageSize",
        attr: "show-page-size",
        type: "boolean",
        default: "false",
        description: "Whether to show page size selector"
      },
      {
        name: "showPrevNext",
        attr: "show-prev-next",
        type: "boolean",
        default: "true",
        description: "Whether to show previous/next buttons"
      },
      {
        name: "showProgress",
        attr: "show-progress",
        type: "boolean",
        default: "false",
        description: "Show progress indicator"
      },
      {
        name: "showSelectedMarker",
        attr: "show-selected-marker",
        type: "boolean",
        default: "true",
        description: "If true, shows a checkmark (tick) next to selected items in internal dropdowns."
      },
      {
        name: "showTotal",
        attr: "show-total",
        type: "boolean",
        default: "false",
        description: "Whether to show total count"
      },
      {
        name: "size",
        attr: "size",
        type: "\"lg\" | \"md\" | \"sm\"",
        default: "'md'",
        description: "Size of the pagination component",
        options: [
          "lg",
          "md",
          "sm"
        ]
      },
      {
        name: "smartCompact",
        attr: "smart-compact",
        type: "boolean",
        default: "false",
        description: "Auto-switch to compact when pages exceed threshold"
      },
      {
        name: "smartCompactThreshold",
        attr: "smart-compact-threshold",
        type: "number",
        default: "20",
        description: "Page count threshold for smart compact mode"
      },
      {
        name: "sticky",
        attr: "sticky",
        type: "boolean",
        default: "false",
        description: "Make pagination sticky"
      },
      {
        name: "stickyPosition",
        attr: "sticky-position",
        type: "\"bottom\" | \"top\"",
        default: "'bottom'",
        description: "Sticky position (top or bottom)",
        options: [
          "bottom",
          "top"
        ]
      },
      {
        name: "storageKey",
        attr: "storage-key",
        type: "string",
        default: "'pagination-page'",
        description: "LocalStorage key for persistence"
      },
      {
        name: "swipeGestures",
        attr: "swipe-gestures",
        type: "boolean",
        default: "true",
        description: "Enable swipe gestures on mobile"
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "Color theme",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "totalItems",
        attr: "total-items",
        type: "number",
        default: "0",
        description: "Total number of items"
      },
      {
        name: "type",
        attr: "type",
        type: "\"advanced\" | \"basic\" | \"compact\" | \"detailed\" | \"dropdown\" | \"indicator\" | \"input\" | \"minimal\"",
        default: "'basic'",
        description: "Type of pagination to display",
        options: [
          "advanced",
          "basic",
          "compact",
          "detailed",
          "dropdown",
          "indicator",
          "input",
          "minimal"
        ]
      },
      {
        name: "urlParam",
        attr: "url-param",
        type: "string",
        default: "'page'",
        description: "URL parameter name for page number"
      },
      {
        name: "urlSync",
        attr: "url-sync",
        type: "boolean",
        default: "false",
        description: "Sync current page with URL query parameter"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"filled\" | \"floating\" | \"glass\" | \"minimalist\" | \"modern\" | \"outlined\" | \"premium\" | \"soft\" | \"underline\"",
        default: "'default'",
        description: "Visual variant of the pagination",
        options: [
          "default",
          "filled",
          "floating",
          "glass",
          "minimalist",
          "modern",
          "outlined",
          "premium",
          "soft",
          "underline"
        ]
      },
      {
        name: "vertical",
        attr: "vertical",
        type: "boolean",
        default: "false",
        description: "Layout the pagination vertically"
      }
    ],
    events: [
      {
        name: "itemsPerPageChange",
        detail: "number",
        description: "Emitted when items per page changes"
      },
      {
        name: "pageChange",
        detail: "{ page: number; itemsPerPage: number; }",
        description: "Emitted when page changes"
      },
      {
        name: "validationError",
        detail: "string",
        description: "Emitted when validation error occurs"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-pagination arrows-joined circle compact></ui-pagination>",
      stencil: "<ui-pagination arrowsJoined={true} circle={true} compact={true}></ui-pagination>",
      react: "export default function Example() {\n  return <ui-pagination arrowsJoined circle compact></ui-pagination>;\n}",
      angular: "<ui-pagination [arrowsJoined]=\"true\" [circle]=\"true\" [compact]=\"true\"></ui-pagination>",
      vue: "<template>\n  <UiPagination :arrows-joined=\"true\" :circle=\"true\" :compact=\"true\"></UiPagination>\n</template>"
    }
  },
  {
    id: "panel",
    name: "Panel",
    tag: "ui-panel",
    category: "Layout",
    description: "Panel web component (<ui-panel>).",
    totalProps: 49,
    totalEvents: 13,
    variantsCount: 7,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 34,
    color: "#fbbf24",
    props: [
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "string",
        default: "'300ms'",
        description: "Animation duration for collapse/expand"
      },
      {
        name: "animationType",
        attr: "animation-type",
        type: "\"fade\" | \"none\" | \"slide\"",
        default: "'slide'",
        description: "Animation type for collapse/expand",
        options: [
          "fade",
          "none",
          "slide"
        ]
      },
      {
        name: "aura",
        attr: "aura",
        type: "boolean",
        default: "false",
        description: "Dynamic flowing glow effect (Aura)"
      },
      {
        name: "backgroundColor",
        attr: "background-color",
        type: "string",
        default: "'white'",
        description: "Background color of the panel"
      },
      {
        name: "badge",
        attr: "badge",
        type: "number | string",
        default: "''",
        description: "Badge content (number or text)"
      },
      {
        name: "badgeVariant",
        attr: "badge-variant",
        type: "\"count\" | \"dot\" | \"text\"",
        default: "'count'",
        description: "Badge variant style",
        options: [
          "count",
          "dot",
          "text"
        ]
      },
      {
        name: "bounds",
        attr: "bounds",
        type: "\"none\" | \"viewport\"",
        default: "'none'",
        description: "Limit dragging within the viewport",
        options: [
          "none",
          "viewport"
        ]
      },
      {
        name: "collapsed",
        attr: "collapsed",
        type: "boolean",
        default: "false",
        description: "Whether the panel is currently collapsed"
      },
      {
        name: "dismissible",
        attr: "dismissible",
        type: "boolean",
        default: "false",
        description: "Close panel when clicking on backdrop"
      },
      {
        name: "dragPhysics",
        attr: "drag-physics",
        type: "boolean",
        default: "false",
        description: "Apply 3D tilt physics during drag"
      },
      {
        name: "edgeSnapping",
        attr: "edge-snapping",
        type: "boolean",
        default: "false",
        description: "Snap to window edges when dragging close to them"
      },
      {
        name: "elevation",
        attr: "elevation",
        type: "number",
        default: "2",
        description: "Elevation level (0-5) for shadow depth"
      },
      {
        name: "enableSearch",
        attr: "enable-search",
        type: "boolean",
        default: "false",
        description: "Integrated search bar in header"
      },
      {
        name: "glass",
        attr: "glass",
        type: "boolean",
        default: "false",
        description: "Glassmorphism effect"
      },
      {
        name: "gridSize",
        attr: "grid-size",
        type: "number",
        default: "20",
        description: "Size of the grid for snapping"
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "'auto'",
        description: "Panel height"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: "Panel icon to show in header"
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: "Draggable panel"
      },
      {
        name: "keyboardNav",
        attr: "keyboard-nav",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Whether the panel is in loading state"
      },
      {
        name: "maxHeight",
        attr: "max-height",
        type: "string",
        default: "'none'",
        description: "Maximum height of the panel"
      },
      {
        name: "maxWidth",
        attr: "max-width",
        type: "string",
        default: "'none'",
        description: "Maximum width of the panel"
      },
      {
        name: "maximizable",
        attr: "maximizable",
        type: "boolean",
        default: "false",
        description: "Maximizable panel"
      },
      {
        name: "maximized",
        attr: "maximized",
        type: "boolean",
        default: "false",
        description: "Maximized state"
      },
      {
        name: "minHeight",
        attr: "min-height",
        type: "string",
        default: "'100px'",
        description: "Minimum height when resizing"
      },
      {
        name: "minWidth",
        attr: "min-width",
        type: "string",
        default: "'200px'",
        description: "Minimum width when resizing"
      },
      {
        name: "minimizable",
        attr: "minimizable",
        type: "boolean",
        default: "false",
        description: "Minimizable panel"
      },
      {
        name: "minimized",
        attr: "minimized",
        type: "boolean",
        default: "false",
        description: "Minimized state"
      },
      {
        name: "modal",
        attr: "modal",
        type: "boolean",
        default: "false",
        description: "Show backdrop behind the panel (modal mode)"
      },
      {
        name: "noPadding",
        attr: "no-padding",
        type: "boolean",
        default: "false",
        description: "Remove processing on content padding"
      },
      {
        name: "overflow",
        attr: "overflow",
        type: "\"auto\" | \"hidden\" | \"scroll\" | \"visible\"",
        default: "'auto'",
        description: "Overflow behavior",
        options: [
          "auto",
          "hidden",
          "scroll",
          "visible"
        ]
      },
      {
        name: "panelId",
        attr: "panel-id",
        type: "string",
        default: "''",
        description: "Unique identifier for the panel"
      },
      {
        name: "panelSubtitle",
        attr: "panel-subtitle",
        type: "string",
        default: "''",
        description: "Panel subtitle text"
      },
      {
        name: "panelTitle",
        attr: "panel-title",
        type: "string",
        default: "''",
        description: "Panel title text"
      },
      {
        name: "persistenceId",
        attr: "persistence-id",
        type: "string",
        default: "",
        description: "Key to persist the panel's open state and size in localStorage"
      },
      {
        name: "pinned",
        attr: "pinned",
        type: "boolean",
        default: "false",
        description: "Pinned panel (stays on top)"
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom\" | \"bottom-left\" | \"bottom-right\" | \"center\" | \"left\" | \"right\" | \"top\" | \"top-left\" | \"top-right\"",
        default: "",
        description: "Position of the panel (docking)",
        options: [
          "bottom",
          "bottom-left",
          "bottom-right",
          "center",
          "left",
          "right",
          "top",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "resizable",
        attr: "resizable",
        type: "boolean",
        default: "false",
        description: "Resizable panel"
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search content...'",
        description: "Search placeholder text"
      },
      {
        name: "showClose",
        attr: "show-close",
        type: "boolean",
        default: "true",
        description: "Show close button"
      },
      {
        name: "showSettings",
        attr: "show-settings",
        type: "boolean",
        default: "true",
        description: "Show settings button"
      },
      {
        name: "snapThreshold",
        attr: "snap-threshold",
        type: "number",
        default: "20",
        description: "Snap distance in pixels"
      },
      {
        name: "snapToGrid",
        attr: "snap-to-grid",
        type: "boolean",
        default: "false",
        description: "Snap to a grid while dragging"
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"danger\" | \"default\" | \"info\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        default: "'default'",
        description: "Color theme for the panel",
        options: [
          "danger",
          "default",
          "info",
          "primary",
          "secondary",
          "success",
          "warning"
        ]
      },
      {
        name: "toggleable",
        attr: "toggleable",
        type: "boolean",
        default: "false",
        description: "Whether the panel is toggleable (collapsible)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"elevated\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"outlined\"",
        default: "'elevated'",
        description: "Visual variant",
        options: [
          "default",
          "elevated",
          "filled",
          "flat",
          "ghost",
          "glass",
          "outlined"
        ]
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "'100%'",
        description: "Panel width"
      },
      {
        name: "x",
        attr: "x",
        type: "string",
        default: "",
        description: "Horizontal position (e.g., '100px', '20%'). Used if position is not set."
      },
      {
        name: "y",
        attr: "y",
        type: "string",
        default: "",
        description: "Vertical position (e.g., '100px', '20%'). Used if position is not set."
      }
    ],
    events: [
      {
        name: "panelClose",
        detail: "PanelCloseEvent",
        description: ""
      },
      {
        name: "panelDrag",
        detail: "{ panelId: string; x: number; y: number; }",
        description: ""
      },
      {
        name: "panelDragEnd",
        detail: "{ panelId: string; x: number; y: number; }",
        description: ""
      },
      {
        name: "panelDragStart",
        detail: "{ panelId: string; x: number; y: number; }",
        description: ""
      },
      {
        name: "panelMaximize",
        detail: "{ panelId: string; }",
        description: ""
      },
      {
        name: "panelMinimize",
        detail: "{ panelId: string; }",
        description: ""
      },
      {
        name: "panelResize",
        detail: "{ panelId: string; width: number; height: number; }",
        description: ""
      },
      {
        name: "panelResizeEnd",
        detail: "{ panelId: string; width: number; height: number; }",
        description: ""
      },
      {
        name: "panelResizeStart",
        detail: "{ panelId: string; width: number; height: number; }",
        description: ""
      },
      {
        name: "panelRestore",
        detail: "{ panelId: string; }",
        description: ""
      },
      {
        name: "panelSearch",
        detail: "{ query: string; }",
        description: ""
      },
      {
        name: "panelSettings",
        detail: "PanelSettingsEvent",
        description: ""
      },
      {
        name: "toggle",
        detail: "{ collapsed: boolean; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-panel animation-type=\"slide\" aura badge-variant=\"count\"></ui-panel>",
      stencil: "<ui-panel animation-type=\"slide\" aura={true} badge-variant=\"count\"></ui-panel>",
      react: "export default function Example() {\n  return <ui-panel animation-type=\"slide\" aura badge-variant=\"count\"></ui-panel>;\n}",
      angular: "<ui-panel animation-type=\"slide\" [aura]=\"true\" badge-variant=\"count\"></ui-panel>",
      vue: "<template>\n  <UiPanel animation-type=\"slide\" :aura=\"true\" badge-variant=\"count\"></UiPanel>\n</template>"
    }
  },
  {
    id: "pattern-input",
    name: "Pattern Input",
    tag: "ui-pattern-input",
    category: "Forms",
    description: "Pattern Input web component (<ui-pattern-input>).",
    totalProps: 21,
    totalEvents: 5,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 81,
    color: "#fb7185",
    props: [
      {
        name: "allowedChars",
        attr: "allowed-chars",
        type: "string",
        default: "",
        description: "Allowed characters regex (default: all)"
      },
      {
        name: "autoFormat",
        attr: "auto-format",
        type: "boolean",
        default: "true",
        description: "Auto-format as user types"
      },
      {
        name: "clearable",
        attr: "clearable",
        type: "boolean",
        default: "false",
        description: "Whether the input is clearable"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "errorMessage",
        attr: "error-message",
        type: "string",
        default: "",
        description: "Error message"
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "",
        description: "Helper text"
      },
      {
        name: "inputType",
        attr: "input-type",
        type: "\"alpha\" | \"alphanumeric\" | \"custom\" | \"numeric\" | \"text\"",
        default: "'text'",
        description: "Input type restriction",
        options: [
          "alpha",
          "alphanumeric",
          "custom",
          "numeric",
          "text"
        ]
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Label text"
      },
      {
        name: "maskChar",
        attr: "mask-char",
        type: "string",
        default: "'#'",
        description: "Mask character for pattern (default: #)"
      },
      {
        name: "maxLength",
        attr: "max-length",
        type: "number",
        default: "",
        description: "Max length"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "",
        description: "Input name for forms"
      },
      {
        name: "pattern",
        attr: "pattern",
        type: "string",
        default: "",
        description: "Input pattern for display (e.g., \"(###) ###-####\" for phone)"
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "",
        description: "Placeholder text"
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: "Required field"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "showCounter",
        attr: "show-counter",
        type: "boolean",
        default: "false",
        description: "Show character counter"
      },
      {
        name: "showValidation",
        attr: "show-validation",
        type: "boolean",
        default: "true",
        description: "Show validation status"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size variant",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "successMessage",
        attr: "success-message",
        type: "string",
        default: "",
        description: "Success message"
      },
      {
        name: "validationRegex",
        attr: "validation-regex",
        type: "string",
        default: "",
        description: "Validation regex pattern"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: "Current input value"
      }
    ],
    events: [
      {
        name: "patternInput",
        detail: "{ value: string; formatted: string; }",
        description: "Input event"
      },
      {
        name: "patternInputBlur",
        detail: "void",
        description: "Blur event"
      },
      {
        name: "patternInputChange",
        detail: "{ value: string; formatted: string; isValid: boolean; }",
        description: "Value change event"
      },
      {
        name: "patternInputFocus",
        detail: "void",
        description: "Focus event"
      },
      {
        name: "patternInputValidate",
        detail: "{ isValid: boolean; value: string; }",
        description: "Validation event"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-pattern-input clearable disabled input-type=\"text\"></ui-pattern-input>",
      stencil: "<ui-pattern-input clearable={true} disabled={true} input-type=\"text\"></ui-pattern-input>",
      react: "export default function Example() {\n  return <ui-pattern-input clearable disabled input-type=\"text\"></ui-pattern-input>;\n}",
      angular: "<ui-pattern-input [clearable]=\"true\" [disabled]=\"true\" input-type=\"text\"></ui-pattern-input>",
      vue: "<template>\n  <UiPatternInput :clearable=\"true\" :disabled=\"true\" input-type=\"text\"></UiPatternInput>\n</template>"
    }
  },
  {
    id: "popover",
    name: "Popover",
    tag: "ui-popover",
    category: "Feedback",
    description: "Popover web component (<ui-popover>).",
    totalProps: 35,
    totalEvents: 5,
    variantsCount: 26,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 128,
    color: "#38bdf8",
    props: [
      {
        name: "animation",
        attr: "animation",
        type: "\"fade\" | \"none\" | \"scale\" | \"slide\"",
        default: "'scale'",
        description: "Animation type",
        options: [
          "fade",
          "none",
          "scale",
          "slide"
        ]
      },
      {
        name: "arrowSize",
        attr: "arrow-size",
        type: "number",
        default: "10",
        description: "Size of the arrow in pixels"
      },
      {
        name: "autoPlacement",
        attr: "auto-placement",
        type: "boolean",
        default: "false",
        description: "Automatically choose the best placement based on available space"
      },
      {
        name: "backdrop",
        attr: "backdrop",
        type: "boolean",
        default: "false",
        description: "Show backdrop"
      },
      {
        name: "boundary",
        attr: "boundary",
        type: "\"scrollParent\" | \"viewport\" | HTMLElement",
        default: "'viewport'",
        description: "Boundary element for collision detection",
        options: [
          "scrollParent",
          "viewport"
        ]
      },
      {
        name: "closeOnBlur",
        attr: "close-on-blur",
        type: "boolean",
        default: "true",
        description: "Close popover when focus leaves it"
      },
      {
        name: "closeOnEsc",
        attr: "close-on-esc",
        type: "boolean",
        default: "true",
        description: "Allow Escape key to close the popover (default: true)"
      },
      {
        name: "closeOnOutsideClick",
        attr: "close-on-outside-click",
        type: "boolean",
        default: "true",
        description: "Close popover when clicking outside"
      },
      {
        name: "closeOnScroll",
        attr: "close-on-scroll",
        type: "boolean",
        default: "false",
        description: "Close popover when window is scrolled"
      },
      {
        name: "content",
        attr: "content",
        type: "string",
        default: "''",
        description: "Popover content (HTML string). Use this for simple text or if you can't use the 'content' slot."
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state. If true, popover will not show."
      },
      {
        name: "fallbackPlacements",
        attr: "fallback-placements",
        type: "any",
        default: "",
        description: "Fallback placements for flipping (e.g. \"top, bottom\")"
      },
      {
        name: "flip",
        attr: "flip",
        type: "boolean",
        default: "true",
        description: "Enable auto-flipping when hitting screen boundaries"
      },
      {
        name: "heading",
        attr: "heading",
        type: "string",
        default: "''",
        description: "Popover heading text"
      },
      {
        name: "hideDelay",
        attr: "hide-delay",
        type: "number",
        default: "200",
        description: "Delay in ms before hiding on hover"
      },
      {
        name: "interactive",
        attr: "interactive",
        type: "boolean",
        default: "true",
        description: "When hover trigger is used, allow cursor to move into the popover without closing it. Set to false for pure tooltip behaviour."
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "matchTriggerWidth",
        attr: "match-trigger-width",
        type: "boolean",
        default: "false",
        description: "Match the width of the trigger element"
      },
      {
        name: "maxHeight",
        attr: "max-height",
        type: "string",
        default: "'none'",
        description: "Maximum height of the popover body. If content exceeds this, it scrolls."
      },
      {
        name: "offset",
        attr: "offset",
        type: "number",
        default: "12",
        description: "Distance between popover and trigger (in pixels)"
      },
      {
        name: "open",
        attr: "open",
        type: "boolean",
        default: "false",
        description: "Controlled open state."
      },
      {
        name: "padding",
        attr: "padding",
        type: "number",
        default: "24",
        description: "Padding from boundary edges"
      },
      {
        name: "placement",
        attr: "placement",
        type: "\"bottom\" | \"bottom-left\" | \"bottom-right\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-left\" | \"top-right\"",
        default: "'top'",
        description: "Placement of popover",
        options: [
          "bottom",
          "bottom-left",
          "bottom-right",
          "left",
          "left-end",
          "left-start",
          "right",
          "right-end",
          "right-start",
          "top",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "popoverRole",
        attr: "popover-role",
        type: "\"dialog\" | \"listbox\" | \"menu\" | \"tooltip\"",
        default: "'dialog'",
        description: "ARIA role for the popover panel. Use 'tooltip' for non-interactive hover hints, 'menu' for menus, 'dialog' for rich content.",
        options: [
          "dialog",
          "listbox",
          "menu",
          "tooltip"
        ]
      },
      {
        name: "shift",
        attr: "shift",
        type: "boolean",
        default: "true",
        description: "Enable auto-shifting (clamping) to stay inside viewport"
      },
      {
        name: "showArrow",
        attr: "show-arrow",
        type: "boolean",
        default: "true",
        description: "Show arrow"
      },
      {
        name: "showCloseButton",
        attr: "show-close-button",
        type: "boolean",
        default: "false",
        description: "Show close button"
      },
      {
        name: "showDelay",
        attr: "show-delay",
        type: "number",
        default: "0",
        description: "Delay in ms before showing on hover (0 = immediate)"
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "Skeleton state"
      },
      {
        name: "strategy",
        attr: "strategy",
        type: "\"absolute\" | \"fixed\"",
        default: "'fixed'",
        description: "Positioning strategy",
        options: [
          "absolute",
          "fixed"
        ]
      },
      {
        name: "target",
        attr: "target",
        type: "HTMLElement | string",
        default: "",
        description: "The target element to anchor the popover to. Can be a CSS selector (string) or a direct HTMLElement reference. If not provided, it will use the element in the 'trigger' slot or its first child."
      },
      {
        name: "trigger",
        attr: "trigger",
        type: "\"click\" | \"focus\" | \"hover\" | \"manual\"",
        default: "'click'",
        description: "Trigger type: 'click' | 'hover' | 'focus' | 'manual' 'manual' = only show/hide via method calls",
        options: [
          "click",
          "focus",
          "hover",
          "manual"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"borderless\" | \"danger\" | \"dark\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"light\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'light'",
        description: "Visual variant. 'light' | 'dark' | 'success' | 'warning' | 'error' | 'info'",
        options: [
          "borderless",
          "danger",
          "dark",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "light",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "'280px'",
        description: "Popover width"
      },
      {
        name: "zIndex",
        attr: "z-index",
        type: "number",
        default: "21000",
        description: "Optional z-index for the popover panel"
      }
    ],
    events: [
      {
        name: "uiBeforeClose",
        detail: "void",
        description: "Emitted before popover hides. Call event.preventDefault() to cancel."
      },
      {
        name: "uiBeforeOpen",
        detail: "void",
        description: "Emitted before popover shows. Call event.preventDefault() to cancel."
      },
      {
        name: "uiClose",
        detail: "void",
        description: "Emitted when popover hides"
      },
      {
        name: "uiOpen",
        detail: "void",
        description: "Emitted when popover shows"
      },
      {
        name: "uiToggle",
        detail: "{ open: boolean; }",
        description: "Emitted when toggled"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-popover animation=\"scale\" auto-placement backdrop></ui-popover>",
      stencil: "<ui-popover animation=\"scale\" autoPlacement={true} backdrop={true}></ui-popover>",
      react: "export default function Example() {\n  return <ui-popover animation=\"scale\" autoPlacement backdrop></ui-popover>;\n}",
      angular: "<ui-popover animation=\"scale\" [autoPlacement]=\"true\" [backdrop]=\"true\"></ui-popover>",
      vue: "<template>\n  <UiPopover animation=\"scale\" :auto-placement=\"true\" :backdrop=\"true\"></UiPopover>\n</template>"
    }
  },
  {
    id: "progress",
    name: "Progress",
    tag: "ui-progress",
    category: "Feedback",
    description: "Progress web component (<ui-progress>).",
    totalProps: 46,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 175,
    color: "#818cf8",
    props: [
      {
        name: "buffer",
        attr: "buffer",
        type: "number",
        default: "0",
        description: "Buffer percentage for loading states"
      },
      {
        name: "dataLabels",
        attr: "data-labels",
        type: "string",
        default: "''",
        description: "Raw metric labels (e.g. '5.2 GB / 10 GB')"
      },
      {
        name: "decimalPrecision",
        attr: "decimal-precision",
        type: "number",
        default: "0",
        description: "Decimal precision for percentage display"
      },
      {
        name: "estimatedTime",
        attr: "estimated-time",
        type: "number",
        default: "0",
        description: "Estimated time remaining in seconds"
      },
      {
        name: "format",
        type: "(percent: number) => string",
        default: "(percent: number) => `${percent}%`",
        description: "Custom format function for progress text"
      },
      {
        name: "gapDegree",
        attr: "gap-degree",
        type: "number",
        default: "0",
        description: "Gap degree (for circle/dashboard type)"
      },
      {
        name: "gapPosition",
        attr: "gap-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'top'",
        description: "Gap position (for circle/dashboard type)",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "glass",
        attr: "glass",
        type: "boolean",
        default: "false",
        description: "Enable glassmorphism effect for the trail"
      },
      {
        name: "glow",
        attr: "glow",
        type: "boolean",
        default: "false",
        description: "Enable dynamic glow effect based on status"
      },
      {
        name: "gradient",
        attr: "gradient",
        type: "boolean",
        default: "false",
        description: "Enable automatic gradient based on status or strokeColor"
      },
      {
        name: "height",
        attr: "height",
        type: "number | string",
        default: "'100%'",
        description: "Height/Length of progress bar (for type='line' and orientation='vertical')"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "''",
        description: "Icon name to display alongside status"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "string",
        default: "'lucide'",
        description: "Icon library (lucide, fontawesome, se, core)"
      },
      {
        name: "indeterminate",
        attr: "indeterminate",
        type: "boolean",
        default: "false",
        description: "Indeterminate state (infinite animation)"
      },
      {
        name: "interactive",
        attr: "interactive",
        type: "boolean",
        default: "false",
        description: "Allow manual interaction (slider mode)"
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"bottom\" | \"inside\" | \"left\" | \"outside\" | \"right\" | \"top\"",
        default: "'outside'",
        description: "Label position",
        options: [
          "bottom",
          "inside",
          "left",
          "outside",
          "right",
          "top"
        ]
      },
      {
        name: "liquid",
        attr: "liquid",
        type: "boolean",
        default: "false",
        description: "Enable premium wave/liquid animation"
      },
      {
        name: "milestones",
        type: "{ percent: number; label?: string; icon?: string; }[]",
        default: "[]",
        description: "Milestone markers"
      },
      {
        name: "multiProgress",
        type: "{ percent: number; color?: string; label?: string; }[]",
        default: "[]",
        description: "Multiple progress bars for stacked display"
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation of the progress bar",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "paused",
        attr: "paused",
        type: "boolean",
        default: "false",
        description: "Paused state"
      },
      {
        name: "peakMarker",
        attr: "peak-marker",
        type: "number",
        default: "0",
        description: "Tracks the maximum percent reached (Ghost Marker)"
      },
      {
        name: "percent",
        attr: "percent",
        type: "number",
        default: "0",
        description: "Current progress percentage (0-100)"
      },
      {
        name: "percentageColor",
        attr: "percentage-color",
        type: "string",
        default: "''",
        description: "Independent color for the percentage text"
      },
      {
        name: "showBuffer",
        attr: "show-buffer",
        type: "boolean",
        default: "false",
        description: "Show buffer indicator"
      },
      {
        name: "showInfo",
        attr: "show-info",
        type: "boolean",
        default: "true",
        description: "Whether to display progress value and status icon"
      },
      {
        name: "showPauseButton",
        attr: "show-pause-button",
        type: "boolean",
        default: "false",
        description: "Show pause/resume button"
      },
      {
        name: "showTimeEstimate",
        attr: "show-time-estimate",
        type: "boolean",
        default: "false",
        description: "Show time estimation"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"sm\"",
        default: "'default'",
        description: "Size of progress (only for type='circle' or 'dashboard')",
        options: [
          "default",
          "sm"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "Whether to display in skeleton/loading mode"
      },
      {
        name: "status",
        attr: "status",
        type: "\"active\" | \"completed\" | \"danger\" | \"empty\" | \"exception\" | \"interrupted\" | \"normal\" | \"running\" | \"success\" | \"warning\"",
        default: "'normal'",
        description: "Status of progress",
        options: [
          "active",
          "completed",
          "danger",
          "empty",
          "exception",
          "interrupted",
          "normal",
          "running",
          "success",
          "warning"
        ]
      },
      {
        name: "statusBar",
        attr: "status-bar",
        type: "boolean",
        default: "false",
        description: "Status-bar variant: shows a lifecycle label (Not Started / Running / Interrupted / Completed) above the progress bar derived automatically from percent + status."
      },
      {
        name: "statusBarAlign",
        attr: "status-bar-align",
        type: "\"center\" | \"left\" | \"right\"",
        default: "'left'",
        description: "Alignment of the status badge inside the status bar header. 'left' (default) — badge left, percent right. 'center' — badge and percent centered together. 'right' — badge right, percent left.",
        options: [
          "center",
          "left",
          "right"
        ]
      },
      {
        name: "statusBarPosition",
        attr: "status-bar-position",
        type: "\"inside\" | \"top\"",
        default: "'inside'",
        description: "Position of the status chip/badge in status-bar mode. 'inside' (default) — inside the progress bar trail (requires minimum height of 32px). 'top' — above the progress bar (allows smaller progress bar heights).",
        options: [
          "inside",
          "top"
        ]
      },
      {
        name: "statusLabels",
        type: "{ notStarted?: string; running?: string; interrupted?: string; completed?: string; }",
        default: "{}",
        description: "Custom text labels for each status-bar state. Pass any subset to override — unset keys keep their defaults. e.g. { notStarted: 'Pending', running: 'In Progress', interrupted: 'Paused', completed: 'Done' }"
      },
      {
        name: "steps",
        attr: "steps",
        type: "number",
        default: "0",
        description: "Total step count (for steps progress)"
      },
      {
        name: "strokeColor",
        attr: "stroke-color",
        type: "string | { from?: string; to?: string; direction?: string; }",
        default: "'#1890ff'",
        description: "Color of progress bar (string or gradient object)"
      },
      {
        name: "strokeLinecap",
        attr: "stroke-linecap",
        type: "\"round\" | \"square\"",
        default: "'round'",
        description: "Shape of progress linecap",
        options: [
          "round",
          "square"
        ]
      },
      {
        name: "strokeWidth",
        attr: "stroke-width",
        type: "number",
        default: "10",
        description: "Width of progress bar stroke"
      },
      {
        name: "success",
        type: "{ percent?: number; strokeColor?: string; }",
        default: "null",
        description: "Segmented success percent"
      },
      {
        name: "thresholds",
        type: "{ percent: number; color?: string; status?: string; glow?: boolean; vibrate?: boolean; }[]",
        default: "[]",
        description: "Dynamic threshold mapping [{percent: 80, color: 'red', status: 'danger'}]"
      },
      {
        name: "ticks",
        attr: "ticks",
        type: "number",
        default: "0",
        description: "Show scale ticks at specific intervals (e.g. 10)"
      },
      {
        name: "trailColor",
        attr: "trail-color",
        type: "string",
        default: "'#f0f0f0'",
        description: "Color of unfilled part"
      },
      {
        name: "type",
        attr: "type",
        type: "\"circle\" | \"dashboard\" | \"industrial\" | \"line\" | \"segmented\"",
        default: "'line'",
        description: "Type of progress",
        options: [
          "circle",
          "dashboard",
          "industrial",
          "line",
          "segmented"
        ]
      },
      {
        name: "vitality",
        attr: "vitality",
        type: "boolean",
        default: "false",
        description: "Show a background 'vitality' pulse synchronized with system health"
      },
      {
        name: "width",
        attr: "width",
        type: "number | string",
        default: "'100%'",
        description: "Width/Length of progress bar (for type='line' and orientation='horizontal')"
      }
    ],
    events: [
      {
        name: "progressChange",
        detail: "{ value: number; }",
        description: "Emitted when user interacts/scrubs"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-progress gap-position=\"top\" glass glow></ui-progress>",
      stencil: "<ui-progress gap-position=\"top\" glass={true} glow={true}></ui-progress>",
      react: "export default function Example() {\n  return <ui-progress gap-position=\"top\" glass glow></ui-progress>;\n}",
      angular: "<ui-progress gap-position=\"top\" [glass]=\"true\" [glow]=\"true\"></ui-progress>",
      vue: "<template>\n  <UiProgress gap-position=\"top\" :glass=\"true\" :glow=\"true\"></UiProgress>\n</template>"
    }
  },
  {
    id: "radio",
    name: "Radio",
    tag: "ui-radio",
    category: "Forms",
    description: "Radio web component (<ui-radio>).",
    totalProps: 35,
    totalEvents: 4,
    variantsCount: 6,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 222,
    color: "#a855f7",
    props: [
      {
        name: "ariaDescribedBy",
        attr: "aria-described-by",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "ariaLabel",
        attr: "aria-label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "checked",
        attr: "checked",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "customClass",
        attr: "custom-class",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "customIcon",
        attr: "custom-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "customIconLibrary",
        attr: "custom-icon-library",
        type: "string",
        default: "'lucide'",
        description: "High-Fidelity: Library for custom icons"
      },
      {
        name: "customImage",
        attr: "custom-image",
        type: "string",
        default: "''",
        description: "High-Fidelity: Custom image for dot"
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "descriptionPosition",
        attr: "description-position",
        type: "\"bottom\" | \"side\"",
        default: "'bottom'",
        description: "Position of the descriptive text relative to the label",
        options: [
          "bottom",
          "side"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "enableAnimation",
        attr: "enable-animation",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "glow",
        attr: "glow",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Glow effect when checked"
      },
      {
        name: "haptic",
        attr: "haptic",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Enable haptic feedback"
      },
      {
        name: "hapticIntensity",
        attr: "haptic-intensity",
        type: "\"heavy\" | \"light\" | \"md\"",
        default: "'light'",
        description: "High-Fidelity: Haptic intensity",
        options: [
          "heavy",
          "light",
          "md"
        ]
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "isButton",
        attr: "is-button",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'right'",
        description: "",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "radioTabIndex",
        attr: "radio-tab-index",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "reveal",
        attr: "reveal",
        type: "\"fade-in\" | \"none\" | \"slide-up\" | \"zoom\"",
        default: "'none'",
        description: "Entry animation when mounting",
        options: [
          "fade-in",
          "none",
          "slide-up",
          "zoom"
        ]
      },
      {
        name: "revealDelay",
        attr: "reveal-delay",
        type: "number",
        default: "0",
        description: "Delay for entry animation (ms)"
      },
      {
        name: "rippleEffect",
        attr: "ripple-effect",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showDot",
        attr: "show-dot",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "tooltip",
        attr: "tooltip",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "tooltipPosition",
        attr: "tooltip-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'top'",
        description: "",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"card\" | \"default\" | \"glass\" | \"raised\" | \"underlined\"",
        default: "'default'",
        description: "",
        options: [
          "bordered",
          "card",
          "default",
          "glass",
          "raised",
          "underlined"
        ]
      }
    ],
    events: [
      {
        name: "analyticsEvent",
        detail: "{ checked: boolean; value: string; }",
        description: ""
      },
      {
        name: "radioBlur",
        detail: "void",
        description: ""
      },
      {
        name: "radioChange",
        detail: "{ checked: boolean; value: string; }",
        description: ""
      },
      {
        name: "radioFocus",
        detail: "void",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-radio checked color=\"primary\" description-position=\"bottom\"></ui-radio>",
      stencil: "<ui-radio checked={true} color=\"primary\" description-position=\"bottom\"></ui-radio>",
      react: "export default function Example() {\n  return <ui-radio checked color=\"primary\" description-position=\"bottom\"></ui-radio>;\n}",
      angular: "<ui-radio [checked]=\"true\" color=\"primary\" description-position=\"bottom\"></ui-radio>",
      vue: "<template>\n  <UiRadio :checked=\"true\" color=\"primary\" description-position=\"bottom\"></UiRadio>\n</template>"
    }
  },
  {
    id: "range-slider",
    name: "Range Slider",
    tag: "ui-range-slider",
    category: "Forms",
    description: "Range Slider web component (<ui-range-slider>).",
    totalProps: 33,
    totalEvents: 3,
    variantsCount: 9,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 269,
    color: "#22d3ee",
    props: [
      {
        name: "circle",
        attr: "circle",
        type: "boolean",
        default: "false",
        description: "Circle variant (aesthetic)"
      },
      {
        name: "color",
        attr: "color",
        type: "string | { from: string; to: string; } | { min: number; max: number; color: string; }[]",
        default: "'#3bf673'",
        description: "Color of the slider (string, {from: string, to: string}, or array of ranges [{min: number, max: number, color: string}])"
      },
      {
        name: "customSteps",
        attr: "custom-steps",
        type: "number[] | string",
        default: "[]",
        description: "Custom step marks (non-linear scaling)"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "displayFormat",
        attr: "display-format",
        type: "string",
        default: "''",
        description: "Display format function or string"
      },
      {
        name: "endIcon",
        attr: "end-icon",
        type: "string",
        default: "''",
        description: "End icon/text"
      },
      {
        name: "endValue",
        attr: "end-value",
        type: "number",
        default: "75",
        description: "Range mode - end value"
      },
      {
        name: "gradientTrack",
        attr: "gradient-track",
        type: "boolean",
        default: "false",
        description: "Use a gradient fill for the range track"
      },
      {
        name: "hideRange",
        attr: "hide-range",
        type: "boolean",
        default: "false",
        description: "Hide the colored range track portion"
      },
      {
        name: "inputSync",
        attr: "input-sync",
        type: "boolean",
        default: "false",
        description: "Show an editable number input synced to the slider value"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label displayed above the slider"
      },
      {
        name: "marks",
        attr: "marks",
        type: "SliderMark[] | string",
        default: "[]",
        description: "Custom marks"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "100",
        description: "Maximum value"
      },
      {
        name: "min",
        attr: "min",
        type: "number",
        default: "0",
        description: "Minimum value"
      },
      {
        name: "minRange",
        attr: "min-range",
        type: "number",
        default: "0",
        description: "Minimum distance between thumbs in range mode"
      },
      {
        name: "prefixText",
        attr: "prefix-text",
        type: "string",
        default: "''",
        description: "Prefix string displayed before the value (e.g. '$')"
      },
      {
        name: "range",
        attr: "range",
        type: "boolean",
        default: "false",
        description: "Enable range mode (two thumbs)"
      },
      {
        name: "restrictedValues",
        attr: "restricted-values",
        type: "number[] | string",
        default: "[]",
        description: "Restricted values (only allow specific values)"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "showMarks",
        attr: "show-marks",
        type: "boolean",
        default: "false",
        description: "Show marks"
      },
      {
        name: "showMinMax",
        attr: "show-min-max",
        type: "boolean",
        default: "false",
        description: "Show min and max labels at the ends of the track"
      },
      {
        name: "showTooltip",
        attr: "show-tooltip",
        type: "boolean",
        default: "true",
        description: "Show value tooltip"
      },
      {
        name: "showValue",
        attr: "show-value",
        type: "boolean",
        default: "true",
        description: "Show current value label"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size variant",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "startIcon",
        attr: "start-icon",
        type: "string",
        default: "''",
        description: "Start icon/text"
      },
      {
        name: "startValue",
        attr: "start-value",
        type: "number",
        default: "25",
        description: "Range mode - start value"
      },
      {
        name: "step",
        attr: "step",
        type: "number",
        default: "1",
        description: "Step increment"
      },
      {
        name: "suffixText",
        attr: "suffix-text",
        type: "string",
        default: "''",
        description: "Suffix string displayed after the value (e.g. '%', 'px')"
      },
      {
        name: "tooltipAlwaysVisible",
        attr: "tooltip-always-visible",
        type: "boolean",
        default: "false",
        description: "Tooltip always visible"
      },
      {
        name: "trackColor",
        attr: "track-color",
        type: "string",
        default: "'#e5e7eb'",
        description: "Track color"
      },
      {
        name: "value",
        attr: "value",
        type: "number",
        default: "50",
        description: "Current value (single slider)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"\" | \"danger\" | \"detailed\" | \"glass\" | \"info\" | \"primary\" | \"purple\" | \"success\" | \"warning\"",
        default: "''",
        description: "Semantic color variant or aesthetic variant",
        options: [
          "danger",
          "detailed",
          "glass",
          "info",
          "primary",
          "purple",
          "success",
          "warning"
        ]
      },
      {
        name: "vertical",
        attr: "vertical",
        type: "boolean",
        default: "false",
        description: "Vertical orientation"
      }
    ],
    events: [
      {
        name: "sliderChange",
        detail: "number | { start: number; end: number; }",
        description: "Emitted when value changes"
      },
      {
        name: "sliderDragEnd",
        detail: "void",
        description: "Emitted on drag end"
      },
      {
        name: "sliderDragStart",
        detail: "void",
        description: "Emitted on drag start"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-range-slider circle disabled gradient-track></ui-range-slider>",
      stencil: "<ui-range-slider circle={true} disabled={true} gradientTrack={true}></ui-range-slider>",
      react: "export default function Example() {\n  return <ui-range-slider circle disabled gradientTrack></ui-range-slider>;\n}",
      angular: "<ui-range-slider [circle]=\"true\" [disabled]=\"true\" [gradientTrack]=\"true\"></ui-range-slider>",
      vue: "<template>\n  <UiRangeSlider :circle=\"true\" :disabled=\"true\" :gradient-track=\"true\"></UiRangeSlider>\n</template>"
    }
  },
  {
    id: "rating",
    name: "Rating",
    tag: "ui-rating",
    category: "Forms",
    description: "Rating web component (<ui-rating>).",
    totalProps: 34,
    totalEvents: 1,
    variantsCount: 3,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 316,
    color: "#34d399",
    props: [
      {
        name: "activeColor",
        attr: "active-color",
        type: "string",
        default: "",
        description: "Custom active color (hex/css color)"
      },
      {
        name: "activeFillColor",
        attr: "active-fill-color",
        type: "string",
        default: "",
        description: "Custom active fill color (hex/css color)"
      },
      {
        name: "allowHalf",
        attr: "allow-half",
        type: "boolean",
        default: "false",
        description: "Allow half ratings (only for star type)"
      },
      {
        name: "clearable",
        attr: "clearable",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Allow clearing the rating by clicking the same value"
      },
      {
        name: "color",
        attr: "color",
        type: "\"danger\" | \"primary\" | \"success\" | \"warning\"",
        default: "'warning'",
        description: "Color of active rating",
        options: [
          "danger",
          "primary",
          "success",
          "warning"
        ]
      },
      {
        name: "colorMap",
        attr: "color-map",
        type: "string",
        default: "",
        description: "High-Fidelity: Dynamic color mapping for individual items (JSON array)"
      },
      {
        name: "description",
        attr: "description",
        type: "string",
        default: "",
        description: "/** High-Fidelity: Tactical side/bottom description"
      },
      {
        name: "descriptionPosition",
        attr: "description-position",
        type: "\"bottom\" | \"side\"",
        default: "'bottom'",
        description: "",
        options: [
          "bottom",
          "side"
        ]
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "errorMessage",
        attr: "error-message",
        type: "string",
        default: "",
        description: "Validation: Error message"
      },
      {
        name: "glow",
        attr: "glow",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Atmospheric glow on active items"
      },
      {
        name: "haptic",
        attr: "haptic",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Sensory vibration feedback"
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "",
        description: "Validation: Helper text"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "string",
        default: "'lucide'",
        description: "Icon Library"
      },
      {
        name: "iconName",
        attr: "icon-name",
        type: "string",
        default: "'star'",
        description: "Custom Icon Name (Lucide)"
      },
      {
        name: "image",
        attr: "image",
        type: "string",
        default: "",
        description: "High-Fidelity: Image URL for the rating marker"
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: "Validation: Error state"
      },
      {
        name: "labels",
        attr: "labels",
        type: "string",
        default: "",
        description: "Custom labels for ratings"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "5",
        description: "Maximum rating value (for star and smiley types)"
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: "Read-only mode"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL support"
      },
      {
        name: "showHistogram",
        attr: "show-histogram",
        type: "boolean",
        default: "false",
        description: "Show a distribution histogram of total reviews"
      },
      {
        name: "showReviews",
        attr: "show-reviews",
        type: "boolean",
        default: "false",
        description: "Show total review count"
      },
      {
        name: "showSummary",
        attr: "show-summary",
        type: "boolean",
        default: "false",
        description: "Show a visual summary of the current rating (label and value)"
      },
      {
        name: "showValue",
        attr: "show-value",
        type: "boolean",
        default: "false",
        description: "Show rating value text"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Size of the rating icons",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "summaryData",
        attr: "summary-data",
        type: "string",
        default: "",
        description: "Data for the rating summary histogram (JSON array of counts from 5 to 1 stars)"
      },
      {
        name: "summaryPosition",
        attr: "summary-position",
        type: "\"bottom\" | \"side\"",
        default: "'side'",
        description: "Position of the summary",
        options: [
          "bottom",
          "side"
        ]
      },
      {
        name: "totalReviews",
        attr: "total-reviews",
        type: "number",
        default: "0",
        description: "Total review count value"
      },
      {
        name: "type",
        attr: "type",
        type: "\"smiley\" | \"star\" | \"thumb\"",
        default: "'star'",
        description: "Type of rating",
        options: [
          "smiley",
          "star",
          "thumb"
        ]
      },
      {
        name: "useEmoji",
        attr: "use-emoji",
        type: "boolean",
        default: "false",
        description: "Use native emojis instead of icons for smiley rating"
      },
      {
        name: "value",
        attr: "value",
        type: "number",
        default: "0",
        description: "Current rating value"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"glass\" | \"raised\"",
        default: "'default'",
        description: "High-Fidelity: Visual variant",
        options: [
          "default",
          "glass",
          "raised"
        ]
      },
      {
        name: "victoryGlow",
        attr: "victory-glow",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: Victory pulse on max rating"
      }
    ],
    events: [
      {
        name: "ratingChange",
        detail: "number",
        description: "Emitted when rating changes"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-rating allow-half clearable color=\"warning\"></ui-rating>",
      stencil: "<ui-rating allowHalf={true} clearable={true} color=\"warning\"></ui-rating>",
      react: "export default function Example() {\n  return <ui-rating allowHalf clearable color=\"warning\"></ui-rating>;\n}",
      angular: "<ui-rating [allowHalf]=\"true\" [clearable]=\"true\" color=\"warning\"></ui-rating>",
      vue: "<template>\n  <UiRating :allow-half=\"true\" :clearable=\"true\" color=\"warning\"></UiRating>\n</template>"
    }
  },
  {
    id: "resizable-panel",
    name: "Resizable Panel",
    tag: "ui-resizable-panel",
    category: "Layout",
    description: "Resizable Panel web component (<ui-resizable-panel>).",
    totalProps: 14,
    totalEvents: 4,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 3,
    color: "#f472b6",
    props: [
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "handleColor",
        attr: "handle-color",
        type: "string",
        default: "'#d1d5db'",
        description: ""
      },
      {
        name: "handleHoverColor",
        attr: "handle-hover-color",
        type: "string",
        default: "'#3DCD58'",
        description: ""
      },
      {
        name: "handleSize",
        attr: "handle-size",
        type: "number",
        default: "8",
        description: ""
      },
      {
        name: "maxPanelSize",
        attr: "max-panel-size",
        type: "number",
        default: "-1",
        description: ""
      },
      {
        name: "minPanelSize",
        attr: "min-panel-size",
        type: "number",
        default: "10",
        description: ""
      },
      {
        name: "panels",
        attr: "panels",
        type: "PanelConfig[] | string",
        default: "[]",
        description: ""
      },
      {
        name: "saveState",
        attr: "save-state",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showHandleIcon",
        attr: "show-handle-icon",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "snapThreshold",
        attr: "snap-threshold",
        type: "number",
        default: "30",
        description: ""
      },
      {
        name: "snapToEdge",
        attr: "snap-to-edge",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "stateKey",
        attr: "state-key",
        type: "string",
        default: "'resizable-panel-state'",
        description: ""
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"auto\" | \"dark\" | \"default\" | \"green\" | \"light\"",
        default: "'light'",
        description: "",
        options: [
          "auto",
          "dark",
          "default",
          "green",
          "light"
        ]
      }
    ],
    events: [
      {
        name: "panelCollapse",
        detail: "{ panel: PanelConfig; collapsed: boolean; }",
        description: ""
      },
      {
        name: "panelResize",
        detail: "{ panels: PanelConfig[]; index: number; }",
        description: ""
      },
      {
        name: "resizeEnd",
        detail: "{ index: number; sizes: number[]; }",
        description: ""
      },
      {
        name: "resizeStart",
        detail: "{ index: number; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-resizable-panel animated direction=\"horizontal\" save-state></ui-resizable-panel>",
      stencil: "<ui-resizable-panel animated={true} direction=\"horizontal\" saveState={true}></ui-resizable-panel>",
      react: "export default function Example() {\n  return <ui-resizable-panel animated direction=\"horizontal\" saveState></ui-resizable-panel>;\n}",
      angular: "<ui-resizable-panel [animated]=\"true\" direction=\"horizontal\" [saveState]=\"true\"></ui-resizable-panel>",
      vue: "<template>\n  <UiResizablePanel :animated=\"true\" direction=\"horizontal\" :save-state=\"true\"></UiResizablePanel>\n</template>"
    }
  },
  {
    id: "scroll-top",
    name: "Scroll Top",
    tag: "ui-scroll-top",
    category: "Navigation",
    description: "Scroll Top web component (<ui-scroll-top>).",
    totalProps: 33,
    totalEvents: 0,
    variantsCount: 3,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 50,
    color: "#fbbf24",
    props: [
      {
        name: "animation",
        attr: "animation",
        type: "\"fade\" | \"scale\" | \"slide\"",
        default: "'scale'",
        description: "Entrance animation",
        options: [
          "fade",
          "scale",
          "slide"
        ]
      },
      {
        name: "autoHide",
        attr: "auto-hide",
        type: "boolean",
        default: "false",
        description: "Auto-hide after inactivity"
      },
      {
        name: "autoHideHoldTime",
        attr: "auto-hide-hold-time",
        type: "number",
        default: "3000",
        description: "Auto-hide delay in ms"
      },
      {
        name: "behavior",
        attr: "behavior",
        type: "\"auto\" | \"smooth\"",
        default: "'smooth'",
        description: "Scroll behavior",
        options: [
          "auto",
          "smooth"
        ]
      },
      {
        name: "color",
        attr: "color",
        type: "\"danger\" | \"dark\" | \"info\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        default: "'primary'",
        description: "Color scheme",
        options: [
          "danger",
          "dark",
          "info",
          "primary",
          "secondary",
          "success",
          "warning"
        ]
      },
      {
        name: "glassy",
        attr: "glassy",
        type: "boolean",
        default: "false",
        description: "Use glassmorphism effect (backdrop-filter)"
      },
      {
        name: "haptic",
        attr: "haptic",
        type: "boolean",
        default: "false",
        description: "Enable haptic feedback"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "'arrow-up'",
        description: "Icon to display (can be emoji, text, or HTML)"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Library to use for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: "Allow dragging the scroll-top to reposition it"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Optional text label"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Show loading state"
      },
      {
        name: "magnetic",
        attr: "magnetic",
        type: "boolean",
        default: "false",
        description: "Use magnetic pull effect"
      },
      {
        name: "magneticRadius",
        attr: "magnetic-radius",
        type: "number",
        default: "150",
        description: "Radius of magnetic pull in pixels"
      },
      {
        name: "magneticStrength",
        attr: "magnetic-strength",
        type: "number",
        default: "0.3",
        description: "Strength of magnetic pull (0 to 1)"
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"both\" | \"bottom\" | \"top\"",
        default: "'top'",
        description: "Scroll mode: 'top', 'bottom', or 'both'",
        options: [
          "both",
          "bottom",
          "top"
        ]
      },
      {
        name: "persistenceId",
        attr: "persistence-id",
        type: "string",
        default: "",
        description: "Unique ID to persist the draggable position in localStorage"
      },
      {
        name: "portal",
        attr: "portal",
        type: "boolean",
        default: "false",
        description: "Portal to body to avoid stacking context issues"
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"center\" | \"center-left\" | \"center-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
        default: "'bottom-right'",
        description: "Position of the button",
        options: [
          "bottom-center",
          "bottom-left",
          "bottom-right",
          "center",
          "center-left",
          "center-right",
          "top-center",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "progressColor",
        attr: "progress-color",
        type: "string",
        default: "",
        description: "Progress ring color"
      },
      {
        name: "quickJump",
        attr: "quick-jump",
        type: "boolean",
        default: "false",
        description: "Enable quick-jump menu to headings"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"chip\" | \"circle\" | \"oval\" | \"rounded\" | \"sharp\" | \"square\"",
        default: "'rounded'",
        description: "Button shape",
        options: [
          "chip",
          "circle",
          "oval",
          "rounded",
          "sharp",
          "square"
        ]
      },
      {
        name: "showProgress",
        attr: "show-progress",
        type: "boolean",
        default: "false",
        description: "Show SVG progress ring"
      },
      {
        name: "showProgressValue",
        attr: "show-progress-value",
        type: "boolean",
        default: "false",
        description: "Show percentage text inside progress ring"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Button size",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "Show skeleton placeholder"
      },
      {
        name: "strategy",
        attr: "strategy",
        type: "\"absolute\" | \"fixed\"",
        default: "'fixed'",
        description: "Positioning strategy: 'fixed' (screen) or 'absolute' (container)",
        options: [
          "absolute",
          "fixed"
        ]
      },
      {
        name: "target",
        attr: "target",
        type: "string",
        default: "",
        description: "Target element selector to scroll (default is window)"
      },
      {
        name: "textDirection",
        attr: "text-direction",
        type: "\"auto\" | \"ltr\" | \"rtl\"",
        default: "'auto'",
        description: "Explicit text direction",
        options: [
          "auto",
          "ltr",
          "rtl"
        ]
      },
      {
        name: "threshold",
        attr: "threshold",
        type: "number",
        default: "300",
        description: "Threshold (in pixels) before button appears"
      },
      {
        name: "tooltip",
        attr: "tooltip",
        type: "string",
        default: "",
        description: "Tooltip text"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"ghost\" | \"outline\" | \"solid\"",
        default: "'solid'",
        description: "Button variant",
        options: [
          "ghost",
          "outline",
          "solid"
        ]
      },
      {
        name: "zIndex",
        attr: "z-index",
        type: "number",
        default: "1000",
        description: "Z-index level"
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-scroll-top animation=\"scale\" auto-hide behavior=\"smooth\"></ui-scroll-top>",
      stencil: "<ui-scroll-top animation=\"scale\" autoHide={true} behavior=\"smooth\"></ui-scroll-top>",
      react: "export default function Example() {\n  return <ui-scroll-top animation=\"scale\" autoHide behavior=\"smooth\"></ui-scroll-top>;\n}",
      angular: "<ui-scroll-top animation=\"scale\" [autoHide]=\"true\" behavior=\"smooth\"></ui-scroll-top>",
      vue: "<template>\n  <UiScrollTop animation=\"scale\" :auto-hide=\"true\" behavior=\"smooth\"></UiScrollTop>\n</template>"
    }
  },
  {
    id: "skeleton",
    name: "Skeleton",
    tag: "ui-skeleton",
    category: "Feedback",
    description: "Skeleton web component (<ui-skeleton>).",
    totalProps: 32,
    totalEvents: 2,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 97,
    color: "#fb7185",
    props: [
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: "Whether to show animation"
      },
      {
        name: "animationType",
        attr: "animation-type",
        type: "\"flicker\" | \"glow\" | \"pulse\" | \"sheen\" | \"shimmer\" | \"wave\"",
        default: "'pulse'",
        description: "Animation type: 'pulse' or 'wave'",
        options: [
          "flicker",
          "glow",
          "pulse",
          "sheen",
          "shimmer",
          "wave"
        ]
      },
      {
        name: "ariaLabel",
        attr: "aria-label",
        type: "string",
        default: "",
        description: "ARIA label for accessibility"
      },
      {
        name: "ariaLive",
        attr: "aria-live",
        type: "\"assertive\" | \"off\" | \"polite\"",
        default: "'off'",
        description: "ARIA live region (off, polite, assertive)",
        options: [
          "assertive",
          "off",
          "polite"
        ]
      },
      {
        name: "ariaRole",
        attr: "aria-role",
        type: "string",
        default: "",
        description: "ARIA role override (status, progressbar, etc.)"
      },
      {
        name: "borderRadius",
        attr: "border-radius",
        type: "string",
        default: "'4px'",
        description: "Border radius for rounded shapes"
      },
      {
        name: "color",
        attr: "color",
        type: "string",
        default: "'neutral'",
        description: "Color variant or custom color (hex/rgba)"
      },
      {
        name: "count",
        attr: "count",
        type: "number",
        default: "1",
        description: "Number of items to replicate (useful for lists, cards, etc.) Default: 1"
      },
      {
        name: "customClass",
        attr: "custom-class",
        type: "string",
        default: "''",
        description: "Custom class for additional styling"
      },
      {
        name: "dark",
        attr: "dark",
        type: "\"auto\" | \"dark\" | \"light\"",
        default: "'auto'",
        description: "Show in dark mode (auto, light, dark)",
        options: [
          "auto",
          "dark",
          "light"
        ]
      },
      {
        name: "delay",
        attr: "delay",
        type: "number",
        default: "0",
        description: "Delay in milliseconds before showing the skeleton. Prevents \"flicker\" for high-speed connections."
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"column\" | \"row\"",
        default: "'column'",
        description: "Layout direction for replicated items ('row' or 'column')",
        options: [
          "column",
          "row"
        ]
      },
      {
        name: "elevation",
        attr: "elevation",
        type: "number",
        default: "0",
        description: "Elevation / shadow intensity (0-4) to match the UI component it mimics"
      },
      {
        name: "gap",
        attr: "gap",
        type: "string",
        default: "'16px'",
        description: "Layout gap between replicated items (e.g. '12px', '1rem')"
      },
      {
        name: "ghost",
        attr: "ghost",
        type: "boolean",
        default: "false",
        description: "If true, keeps the children visible at low opacity and blurred behind the skeleton. Only works when `mask` is true."
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "'20px'",
        description: "Height of the skeleton"
      },
      {
        name: "highlightColor",
        attr: "highlight-color",
        type: "string",
        default: "",
        description: "Optional explicit highlight/shimmer color for the wave animation. If not provided, it is auto-derived from `color` by lightening it."
      },
      {
        name: "lastRowWidth",
        attr: "last-row-width",
        type: "string",
        default: "'80%'",
        description: "Width of the last row when multi-line text is used (e.g. '60%')"
      },
      {
        name: "lazyAnimation",
        attr: "lazy-animation",
        type: "boolean",
        default: "true",
        description: "If true, animations will automatically pause when the component is not in the viewport. Dramatically improves performance and battery life for long lists."
      },
      {
        name: "mask",
        attr: "mask",
        type: "boolean",
        default: "false",
        description: "If true, the skeleton acts as a mask over its children. Useful for wrapping text or components to skeletonize them seamlessly."
      },
      {
        name: "progress",
        attr: "progress",
        type: "number",
        default: "",
        description: "Progress value (0-100) for determinate skeletons"
      },
      {
        name: "radius",
        attr: "radius",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "rows",
        attr: "rows",
        type: "number",
        default: "1",
        description: "Number of rows (lines) to render when shape is 'text'"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "RTL shimmer direction"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"avatar\" | \"button\" | \"card\" | \"circle\" | \"image\" | \"list-item\" | \"none\" | \"oval\" | \"pill\" | \"rectangle\" | \"rounded\" | \"rounded-rectangle\" | \"rounded-square\" | \"square\" | \"text\"",
        default: "'rectangle'",
        description: "Shape of the skeleton",
        options: [
          "avatar",
          "button",
          "card",
          "circle",
          "image",
          "list-item",
          "none",
          "oval",
          "pill",
          "rectangle",
          "rounded",
          "rounded-rectangle",
          "rounded-square",
          "square",
          "text"
        ]
      },
      {
        name: "size",
        attr: "size",
        type: "\"2xl\" | \"2xs\" | \"3xl\" | \"3xs\" | \"4xl\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
        default: "'md'",
        description: "Predefined size of the skeleton (xs, sm, md, lg, xl, 2xl)",
        options: [
          "2xl",
          "2xs",
          "3xl",
          "3xs",
          "4xl",
          "lg",
          "md",
          "sm",
          "xl",
          "xs"
        ]
      },
      {
        name: "speed",
        attr: "speed",
        type: "\"fast\" | \"normal\" | \"slow\"",
        default: "'normal'",
        description: "Animation speed",
        options: [
          "fast",
          "normal",
          "slow"
        ]
      },
      {
        name: "stagger",
        attr: "stagger",
        type: "number",
        default: "0",
        description: "Stagger delay in ms between replicated items Makes the animation feel more organic as it flows down the page."
      },
      {
        name: "template",
        attr: "template",
        type: "\"card\" | \"feed-item\" | \"list-item\" | \"media-object\" | \"none\" | \"profile\" | \"table-row\"",
        default: "'none'",
        description: "Layout template to use for automatic skeleton generation. If set to something other than 'none', the `shape` prop is overridden for the template layout.",
        options: [
          "card",
          "feed-item",
          "list-item",
          "media-object",
          "none",
          "profile",
          "table-row"
        ]
      },
      {
        name: "waveAngle",
        attr: "wave-angle",
        type: "string",
        default: "'90deg'",
        description: "Angle of the wave animation (e.g. '45deg', '90deg'). Default: '90deg' (horizontal)"
      },
      {
        name: "waveSpeed",
        attr: "wave-speed",
        type: "string",
        default: "'1.5s'",
        description: "Duration of the wave animation cycle (e.g. '1.5s', '3s'). Default: '1.5s'"
      },
      {
        name: "width",
        attr: "width",
        type: "string",
        default: "'100%'",
        description: "Width of the skeleton"
      }
    ],
    events: [
      {
        name: "skeletonHide",
        detail: "void",
        description: "Fires when skeleton is hidden"
      },
      {
        name: "skeletonShow",
        detail: "void",
        description: "Fires when skeleton is shown"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-skeleton animation-type=\"pulse\" aria-live=\"off\" dark=\"auto\"></ui-skeleton>",
      stencil: "<ui-skeleton animation-type=\"pulse\" aria-live=\"off\" dark=\"auto\"></ui-skeleton>",
      react: "export default function Example() {\n  return <ui-skeleton animation-type=\"pulse\" aria-live=\"off\" dark=\"auto\"></ui-skeleton>;\n}",
      angular: "<ui-skeleton animation-type=\"pulse\" aria-live=\"off\" dark=\"auto\"></ui-skeleton>",
      vue: "<template>\n  <UiSkeleton animation-type=\"pulse\" aria-live=\"off\" dark=\"auto\"></UiSkeleton>\n</template>"
    }
  },
  {
    id: "smart-context-menu",
    name: "Smart Context Menu",
    tag: "ui-smart-context-menu",
    category: "Navigation",
    description: "Smart Context Menu web component (<ui-smart-context-menu>).",
    totalProps: 3,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 144,
    color: "#38bdf8",
    props: [
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'default'",
        description: "",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "items",
        attr: "items",
        type: "MenuItem[] | string",
        default: "[]",
        description: "Menu items, can be JSON string or array of MenuItem"
      },
      {
        name: "target",
        attr: "target",
        type: "string",
        default: "",
        description: ""
      }
    ],
    events: [
      {
        name: "menuItemClick",
        detail: "{ label: string; item: MenuItem; }",
        description: "Event emitted when a menu item is clicked"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-smart-context-menu icon-library=\"default\"></ui-smart-context-menu>",
      stencil: "<ui-smart-context-menu icon-library=\"default\"></ui-smart-context-menu>",
      react: "export default function Example() {\n  return <ui-smart-context-menu icon-library=\"default\"></ui-smart-context-menu>;\n}",
      angular: "<ui-smart-context-menu icon-library=\"default\"></ui-smart-context-menu>",
      vue: "<template>\n  <UiSmartContextMenu icon-library=\"default\"></UiSmartContextMenu>\n</template>"
    }
  },
  {
    id: "smart-location-dropdown",
    name: "Smart Location Dropdown",
    tag: "ui-smart-location-dropdown",
    category: "Forms",
    description: "Smart Location Dropdown web component (<ui-smart-location-dropdown>).",
    totalProps: 23,
    totalEvents: 6,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 191,
    color: "#818cf8",
    props: [
      {
        name: "allowCustomValue",
        attr: "allow-custom-value",
        type: "boolean",
        default: "false",
        description: "Allow custom value creation from search"
      },
      {
        name: "clearable",
        attr: "clearable",
        type: "boolean",
        default: "true",
        description: "Show clear action"
      },
      {
        name: "debounceMs",
        attr: "debounce-ms",
        type: "number",
        default: "250",
        description: "Search debounce in ms"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables control"
      },
      {
        name: "ignoreParentPosition",
        attr: "ignore-parent-position",
        type: "boolean",
        default: "true",
        description: "Force menu position to ignore transformed/positioned parent offsets"
      },
      {
        name: "loadLocations",
        type: "(query: string) => Promise<LocationOption[]>",
        default: "",
        description: "Optional async remote location loader"
      },
      {
        name: "maxHeight",
        attr: "max-height",
        type: "number",
        default: "360",
        description: "Maximum dropdown height in px"
      },
      {
        name: "maxSelections",
        attr: "max-selections",
        type: "number",
        default: "0",
        description: "Max selected items in multi mode (0 = no limit)"
      },
      {
        name: "multiSelect",
        attr: "multi-select",
        type: "boolean",
        default: "false",
        description: "Enables multiple location selection"
      },
      {
        name: "options",
        attr: "options",
        type: "LocationOption[] | string",
        default: "[]",
        description: "Location options as JSON string or array"
      },
      {
        name: "persistState",
        attr: "persist-state",
        type: "boolean",
        default: "true",
        description: "Persist recent/favorites in local storage"
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "'Select location'",
        description: "Placeholder text for trigger"
      },
      {
        name: "portal",
        attr: "portal",
        type: "boolean",
        default: "false",
        description: "Portal menu to document.body (off by default to preserve shadow styling)"
      },
      {
        name: "remoteMinChars",
        attr: "remote-min-chars",
        type: "number",
        default: "2",
        description: "Minimum characters required before async loader executes"
      },
      {
        name: "resultLimit",
        attr: "result-limit",
        type: "number",
        default: "250",
        description: "Max results rendered"
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search country, state, city, postal code...'",
        description: "Search placeholder"
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "true",
        description: "Enables searching"
      },
      {
        name: "showFavorites",
        attr: "show-favorites",
        type: "boolean",
        default: "true",
        description: "Show favorites section"
      },
      {
        name: "showPath",
        attr: "show-path",
        type: "boolean",
        default: "true",
        description: "Display full hierarchy path in options and selected tags"
      },
      {
        name: "showRecent",
        attr: "show-recent",
        type: "boolean",
        default: "true",
        description: "Show recent selections section"
      },
      {
        name: "showTypeBadge",
        attr: "show-type-badge",
        type: "boolean",
        default: "true",
        description: "Show location type badges"
      },
      {
        name: "storageKey",
        attr: "storage-key",
        type: "string",
        default: "'ui-smart-location-dropdown-state'",
        description: "Storage key for persistent state"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "''",
        description: "Selected value(s): single => 'id', multi => comma-separated ids"
      }
    ],
    events: [
      {
        name: "locationChange",
        detail: "LocationSelectionChangeEvent",
        description: ""
      },
      {
        name: "locationClose",
        detail: "void",
        description: ""
      },
      {
        name: "locationCreate",
        detail: "LocationOption",
        description: ""
      },
      {
        name: "locationLoadError",
        detail: "{ query: string; message: string; }",
        description: ""
      },
      {
        name: "locationOpen",
        detail: "void",
        description: ""
      },
      {
        name: "locationSearch",
        detail: "LocationSearchEvent",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-smart-location-dropdown allow-custom-value disabled multi-select></ui-smart-location-dropdown>",
      stencil: "<ui-smart-location-dropdown allowCustomValue={true} disabled={true} multiSelect={true}></ui-smart-location-dropdown>",
      react: "export default function Example() {\n  return <ui-smart-location-dropdown allowCustomValue disabled multiSelect></ui-smart-location-dropdown>;\n}",
      angular: "<ui-smart-location-dropdown [allowCustomValue]=\"true\" [disabled]=\"true\" [multiSelect]=\"true\"></ui-smart-location-dropdown>",
      vue: "<template>\n  <UiSmartLocationDropdown :allow-custom-value=\"true\" :disabled=\"true\" :multi-select=\"true\"></UiSmartLocationDropdown>\n</template>"
    }
  },
  {
    id: "smart-stepper",
    name: "Smart Stepper",
    tag: "ui-smart-stepper",
    category: "Navigation",
    description: "Smart Stepper web component (<ui-smart-stepper>).",
    totalProps: 3,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 238,
    color: "#a855f7",
    props: [
      {
        name: "activeStep",
        attr: "active-step",
        type: "number",
        default: "0",
        description: "Current active step index (0-based)"
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation of the stepper (horizontal or vertical)",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "size",
        attr: "size",
        type: "\"lg\" | \"md\" | \"sm\"",
        default: "'md'",
        description: "Size of the stepper",
        options: [
          "lg",
          "md",
          "sm"
        ]
      }
    ],
    events: [
      {
        name: "stepperChange",
        detail: "{ index: number; step: HTMLElement; }",
        description: "Event emitted when active step changes"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-smart-stepper orientation=\"horizontal\" size=\"md\"></ui-smart-stepper>",
      stencil: "<ui-smart-stepper orientation=\"horizontal\" size=\"md\"></ui-smart-stepper>",
      react: "export default function Example() {\n  return <ui-smart-stepper orientation=\"horizontal\" size=\"md\"></ui-smart-stepper>;\n}",
      angular: "<ui-smart-stepper orientation=\"horizontal\" size=\"md\"></ui-smart-stepper>",
      vue: "<template>\n  <UiSmartStepper orientation=\"horizontal\" size=\"md\"></UiSmartStepper>\n</template>"
    }
  },
  {
    id: "snackbar",
    name: "Snackbar",
    tag: "ui-snackbar",
    category: "Feedback",
    description: "Snackbar web component (<ui-snackbar>).",
    totalProps: 21,
    totalEvents: 5,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 285,
    color: "#22d3ee",
    props: [
      {
        name: "cardStack",
        attr: "card-stack",
        type: "boolean",
        default: "false",
        description: "Enable card stacking mode - notifications stack like cards and expand on hover"
      },
      {
        name: "coalesce",
        attr: "coalesce",
        type: "boolean",
        default: "false",
        description: "Enable smart grouping (coalescing) of identical messages"
      },
      {
        name: "duration",
        attr: "duration",
        type: "number",
        default: "5000",
        description: "Global default duration (ms) for notifications. 0 is infinite."
      },
      {
        name: "enableSlots",
        attr: "enable-slots",
        type: "boolean",
        default: "false",
        description: "Enable slot support for custom notification layouts"
      },
      {
        name: "groupThreshold",
        attr: "group-threshold",
        type: "number",
        default: "3000",
        description: "Default group threshold (ms) - identical messages within this window are coalesced"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'lucide'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "maxDuration",
        attr: "max-duration",
        type: "number",
        default: "0",
        description: "Maximum duration cap (ms). Any item duration above this value is clamped. 0 = no cap."
      },
      {
        name: "maxVisible",
        attr: "max-visible",
        type: "number",
        default: "5",
        description: "Maximum number of visible snackbars"
      },
      {
        name: "openMode",
        attr: "open-mode",
        type: "\"bounce\" | \"fade\" | \"scale\" | \"slide-down\" | \"slide-left\" | \"slide-right\" | \"slide-up\" | \"spring\"",
        default: "'slide-down'",
        description: "Open animation mode for snackbars",
        options: [
          "bounce",
          "fade",
          "scale",
          "slide-down",
          "slide-left",
          "slide-right",
          "slide-up",
          "spring"
        ]
      },
      {
        name: "particles",
        attr: "particles",
        type: "boolean",
        default: "true",
        description: "Enable CSS particle burst on 'sovereign' type notifications. Set to false to disable all particle effects."
      },
      {
        name: "pauseOnFocusLoss",
        attr: "pause-on-focus-loss",
        type: "boolean",
        default: "true",
        description: "Pause timers when the window loses focus (e.g. tab switch)"
      },
      {
        name: "pauseOnHover",
        attr: "pause-on-hover",
        type: "boolean",
        default: "true",
        description: "Pause timers when the cursor hovers over the snackbar"
      },
      {
        name: "portal",
        attr: "portal",
        type: "boolean",
        default: "true",
        description: "Move snackbar to the bottom of the body automatically on load"
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
        default: "'top-right'",
        description: "Position of the snackbar container",
        options: [
          "bottom-center",
          "bottom-left",
          "bottom-right",
          "top-center",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "showCountdown",
        attr: "show-countdown",
        type: "boolean",
        default: "false",
        description: "Show a live countdown chip (e.g. \"3s\") inside the notification before it closes. Only visible when duration > 0 and progress is set to 'bar' or 'ring'."
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Default size for snackbars",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "soundMode",
        attr: "sound-mode",
        type: "\"custom\" | \"none\" | \"synth\"",
        default: "'synth'",
        description: "Sound mode: 'none' | 'synth' | 'custom'",
        options: [
          "custom",
          "none",
          "synth"
        ]
      },
      {
        name: "stackMode",
        attr: "stack-mode",
        type: "\"lifo\" | \"queue\" | \"stack\"",
        default: "'stack'",
        description: "Stack mode for snackbars (only applies when maxVisible > 1)",
        options: [
          "lifo",
          "queue",
          "stack"
        ]
      },
      {
        name: "textDirection",
        attr: "text-direction",
        type: "\"auto\" | \"ltr\" | \"rtl\"",
        default: "'auto'",
        description: "Explicit text direction for this notification instance only. 'auto' reads the CSS computed direction of the element. 'rtl' / 'ltr' override immediately without touching the page layout.",
        options: [
          "auto",
          "ltr",
          "rtl"
        ]
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"auto\" | \"dark\" | \"default\" | \"green\" | \"light\"",
        default: "'auto'",
        description: "Default theme for notifications",
        options: [
          "auto",
          "dark",
          "default",
          "green",
          "light"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'filled'",
        description: "Default variant for snackbars",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      }
    ],
    events: [
      {
        name: "snackbarActionClicked",
        detail: "{ id: string; item: SnackbarItem; }",
        description: "Event emitted when a snackbar action button is clicked"
      },
      {
        name: "snackbarAdded",
        detail: "{ id: string; item: SnackbarItem; }",
        description: "Event emitted when a snackbar is added"
      },
      {
        name: "snackbarClosed",
        detail: "{ id: string; item: SnackbarItem; }",
        description: "Event emitted when a snackbar is closed"
      },
      {
        name: "snackbarLinkClicked",
        detail: "{ id: string; item: SnackbarItem; link: { text: string; url: string; }; }",
        description: "Event emitted when a snackbar link is clicked"
      },
      {
        name: "snackbarUpdated",
        detail: "{ id: string; item: SnackbarItem; }",
        description: "Event emitted when a snackbar is updated"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-snackbar card-stack coalesce enable-slots></ui-snackbar>",
      stencil: "<ui-snackbar cardStack={true} coalesce={true} enableSlots={true}></ui-snackbar>",
      react: "export default function Example() {\n  return <ui-snackbar cardStack coalesce enableSlots></ui-snackbar>;\n}",
      angular: "<ui-snackbar [cardStack]=\"true\" [coalesce]=\"true\" [enableSlots]=\"true\"></ui-snackbar>",
      vue: "<template>\n  <UiSnackbar :card-stack=\"true\" :coalesce=\"true\" :enable-slots=\"true\"></UiSnackbar>\n</template>"
    }
  },
  {
    id: "speed-dial",
    name: "Speed Dial",
    tag: "ui-speed-dial",
    category: "Navigation",
    description: "Speed Dial web component (<ui-speed-dial>).",
    totalProps: 25,
    totalEvents: 2,
    variantsCount: 37,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 332,
    color: "#34d399",
    props: [
      {
        name: "actionLibrary",
        attr: "action-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for actions",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "actions",
        attr: "actions",
        type: "SpeedDialAction[] | string",
        default: "[]",
        description: "Speed dial actions"
      },
      {
        name: "closeOnScroll",
        attr: "close-on-scroll",
        type: "boolean",
        default: "false",
        description: "Close dial when window scrolls"
      },
      {
        name: "color",
        attr: "color",
        type: "\"danger\" | \"info\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        default: "'primary'",
        description: "Color scheme",
        options: [
          "danger",
          "info",
          "primary",
          "secondary",
          "success",
          "warning"
        ]
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"auto\" | \"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'auto'",
        description: "Direction of dial opening",
        options: [
          "auto",
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "glassy",
        attr: "glassy",
        type: "boolean",
        default: "false",
        description: "Use glassmorphism effect"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "'plus'",
        description: "Icon for the main button"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'se'",
        description: "Library for the main button icon",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: "Allow dragging the speed dial to reposition it"
      },
      {
        name: "labelHide",
        attr: "label-hide",
        type: "boolean",
        default: "false",
        description: "Hide the label text but keep it for screen readers"
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"auto\" | \"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'auto'",
        description: "Position of the label/tooltip",
        options: [
          "auto",
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"arc\" | \"linear\" | \"radial\"",
        default: "'linear'",
        description: "Opening layout style: 'linear', 'radial', or 'arc'",
        options: [
          "arc",
          "linear",
          "radial"
        ]
      },
      {
        name: "magnetic",
        attr: "magnetic",
        type: "boolean",
        default: "false",
        description: "Use magnetic pull effect"
      },
      {
        name: "magneticRadius",
        attr: "magnetic-radius",
        type: "number",
        default: "150",
        description: "Radius of magnetic pull in pixels"
      },
      {
        name: "magneticStrength",
        attr: "magnetic-strength",
        type: "number",
        default: "0.3",
        description: "Strength of magnetic pull (0 to 1)"
      },
      {
        name: "persistenceId",
        attr: "persistence-id",
        type: "string",
        default: "",
        description: "Unique ID to persist the draggable position in localStorage"
      },
      {
        name: "position",
        attr: "position",
        type: "\"bottom\" | \"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"center\" | \"center-left\" | \"center-right\" | \"left\" | \"right\" | \"top\" | \"top-center\" | \"top-left\" | \"top-right\"",
        default: "'bottom-right'",
        description: "Position of the speed dial button",
        options: [
          "bottom",
          "bottom-center",
          "bottom-left",
          "bottom-right",
          "center",
          "center-left",
          "center-right",
          "left",
          "right",
          "top",
          "top-center",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'rounded'",
        description: "Button shape",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showTooltips",
        attr: "show-tooltips",
        type: "boolean",
        default: "true",
        description: "Show tooltips/labels"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size of the button",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "strategy",
        attr: "strategy",
        type: "\"absolute\" | \"fixed\"",
        default: "'fixed'",
        description: "Positioning strategy: 'fixed' (screen) or 'absolute' (container)",
        options: [
          "absolute",
          "fixed"
        ]
      },
      {
        name: "toggleIcon",
        attr: "toggle-icon",
        type: "string",
        default: "",
        description: "Icon to show when open (e.g., 'close' or 'x')"
      },
      {
        name: "tooltipPosition",
        attr: "tooltip-position",
        type: "\"auto\" | \"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'auto'",
        description: "Tooltip position",
        options: [
          "auto",
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "trigger",
        attr: "trigger",
        type: "\"click\" | \"hover\"",
        default: "'click'",
        description: "Trigger mode: 'click' (default) or 'hover'",
        options: [
          "click",
          "hover"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"borderless\" | \"color\" | \"danger\" | \"dark\" | \"default\" | \"dots-only\" | \"elevated\" | \"error\" | \"filled\" | \"flat\" | \"ghost\" | \"glass\" | \"gradient\" | \"info\" | \"inverse\" | \"light\" | \"minimal\" | \"neutral\" | \"outlined\" | \"panel\" | \"plain\" | \"primary\" | \"quaternary\" | \"raised\" | \"secondary\" | \"segmented\" | \"soft\" | \"solid\" | \"standard\" | \"status\" | \"success\" | \"surface\" | \"tertiary\" | \"text\" | \"underlined\" | \"warning\"",
        default: "'solid'",
        description: "Button variant",
        options: [
          "bordered",
          "borderless",
          "color",
          "danger",
          "dark",
          "default",
          "dots-only",
          "elevated",
          "error",
          "filled",
          "flat",
          "ghost",
          "glass",
          "gradient",
          "info",
          "inverse",
          "light",
          "minimal",
          "neutral",
          "outlined",
          "panel",
          "plain",
          "primary",
          "quaternary",
          "raised",
          "secondary",
          "segmented",
          "soft",
          "solid",
          "standard",
          "status",
          "success",
          "surface",
          "tertiary",
          "text",
          "underlined",
          "warning"
        ]
      }
    ],
    events: [
      {
        name: "actionClick",
        detail: "string",
        description: "Emitted when an action is clicked"
      },
      {
        name: "speedDialToggle",
        detail: "boolean",
        description: "Emitted when speed dial opens/closes"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-speed-dial action-library=\"default\" close-on-scroll color=\"primary\"></ui-speed-dial>",
      stencil: "<ui-speed-dial action-library=\"default\" closeOnScroll={true} color=\"primary\"></ui-speed-dial>",
      react: "export default function Example() {\n  return <ui-speed-dial action-library=\"default\" closeOnScroll color=\"primary\"></ui-speed-dial>;\n}",
      angular: "<ui-speed-dial action-library=\"default\" [closeOnScroll]=\"true\" color=\"primary\"></ui-speed-dial>",
      vue: "<template>\n  <UiSpeedDial action-library=\"default\" :close-on-scroll=\"true\" color=\"primary\"></UiSpeedDial>\n</template>"
    }
  },
  {
    id: "speedometer",
    name: "Speedometer",
    tag: "ui-speedometer",
    category: "Data Display",
    description: "Speedometer web component (<ui-speedometer>).",
    totalProps: 19,
    totalEvents: 1,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 19,
    color: "#f472b6",
    props: [
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "1000",
        description: "Animation duration in milliseconds"
      },
      {
        name: "customLabels",
        attr: "custom-labels",
        type: "string",
        default: "''",
        description: "Custom text labels mapping (value -> label). JSON string. Example: \"{0: 'Low', 50: 'Med', 100: 'High'}\""
      },
      {
        name: "endAngle",
        attr: "end-angle",
        type: "number",
        default: "135",
        description: "End angle in degrees (default 135 for 270° arc)"
      },
      {
        name: "gradientColors",
        attr: "gradient-colors",
        type: "string",
        default: "''",
        description: "Gradient colors for the arc"
      },
      {
        name: "interactive",
        attr: "interactive",
        type: "boolean",
        default: "false",
        description: "Enable interactive mode (drag needle to set value)"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Label text displayed below the value"
      },
      {
        name: "maxValue",
        attr: "max-value",
        type: "number",
        default: "100",
        description: "Maximum value"
      },
      {
        name: "minValue",
        attr: "min-value",
        type: "number",
        default: "0",
        description: "Minimum value"
      },
      {
        name: "needleColor",
        attr: "needle-color",
        type: "string",
        default: "'#1f2937'",
        description: "Needle color"
      },
      {
        name: "needleShape",
        attr: "needle-shape",
        type: "\"arrow\" | \"line\" | \"triangle\"",
        default: "'triangle'",
        description: "Needle shape: 'triangle', 'arrow', 'line'",
        options: [
          "arrow",
          "line",
          "triangle"
        ]
      },
      {
        name: "ranges",
        attr: "ranges",
        type: "string",
        default: "'[]'",
        description: "Color ranges as JSON string: [{ min, max, color }]"
      },
      {
        name: "secondaryValue",
        attr: "secondary-value",
        type: "number",
        default: "",
        description: "Secondary value (optional) for comparison, displays as a ghost needle"
      },
      {
        name: "showPercentage",
        attr: "show-percentage",
        type: "boolean",
        default: "false",
        description: "Show percentage instead of actual value"
      },
      {
        name: "showTicks",
        attr: "show-ticks",
        type: "boolean",
        default: "true",
        description: "Show tick marks"
      },
      {
        name: "size",
        attr: "size",
        type: "number",
        default: "200",
        description: "Size of the speedometer in pixels"
      },
      {
        name: "startAngle",
        attr: "start-angle",
        type: "number",
        default: "-135",
        description: "Start angle in degrees (default -135 for 270° arc)"
      },
      {
        name: "tickCount",
        attr: "tick-count",
        type: "number",
        default: "10",
        description: "Number of major ticks"
      },
      {
        name: "unit",
        attr: "unit",
        type: "string",
        default: "''",
        description: "Unit text (e.g., 'km/h', 'mph', '%')"
      },
      {
        name: "value",
        attr: "value",
        type: "number",
        default: "0",
        description: "Current value to display"
      }
    ],
    events: [
      {
        name: "valueChange",
        detail: "number",
        description: "Emitted when the value changes in interactive mode"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-speedometer interactive needle-shape=\"triangle\" show-percentage></ui-speedometer>",
      stencil: "<ui-speedometer interactive={true} needle-shape=\"triangle\" showPercentage={true}></ui-speedometer>",
      react: "export default function Example() {\n  return <ui-speedometer interactive needle-shape=\"triangle\" showPercentage></ui-speedometer>;\n}",
      angular: "<ui-speedometer [interactive]=\"true\" needle-shape=\"triangle\" [showPercentage]=\"true\"></ui-speedometer>",
      vue: "<template>\n  <UiSpeedometer :interactive=\"true\" needle-shape=\"triangle\" :show-percentage=\"true\"></UiSpeedometer>\n</template>"
    }
  },
  {
    id: "splitter",
    name: "Splitter",
    tag: "ui-splitter",
    category: "Layout",
    description: "Splitter web component (<ui-splitter>).",
    totalProps: 17,
    totalEvents: 4,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 66,
    color: "#fbbf24",
    props: [
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "doubleClickCollapse",
        attr: "double-click-collapse",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "elevated",
        attr: "elevated",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "gutterColor",
        attr: "gutter-color",
        type: "string",
        default: "'#e5e7eb'",
        description: ""
      },
      {
        name: "gutterHoverColor",
        attr: "gutter-hover-color",
        type: "string",
        default: "'#0de44dff'",
        description: ""
      },
      {
        name: "gutterSize",
        attr: "gutter-size",
        type: "number",
        default: "8",
        description: ""
      },
      {
        name: "keyboardNavigation",
        attr: "keyboard-navigation",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "panels",
        type: "SplitterPanel[]",
        default: "[]",
        description: ""
      },
      {
        name: "persistState",
        attr: "persist-state",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "rounded",
        attr: "rounded",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showGutterIcon",
        attr: "show-gutter-icon",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "sizes",
        type: "number[]",
        default: "[]",
        description: ""
      },
      {
        name: "snapThreshold",
        attr: "snap-threshold",
        type: "number",
        default: "20",
        description: ""
      },
      {
        name: "storageKey",
        attr: "storage-key",
        type: "string",
        default: "'splitter-state'",
        description: ""
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"auto\" | \"dark\" | \"default\" | \"green\" | \"light\"",
        default: "'auto'",
        description: "",
        options: [
          "auto",
          "dark",
          "default",
          "green",
          "light"
        ]
      }
    ],
    events: [
      {
        name: "panelCollapse",
        detail: "{ index: number; collapsed: boolean; }",
        description: ""
      },
      {
        name: "sizeChange",
        detail: "{ sizes: number[]; index: number; }",
        description: ""
      },
      {
        name: "splitterDragEnd",
        detail: "{ index: number; sizes: number[]; }",
        description: ""
      },
      {
        name: "splitterDragStart",
        detail: "{ index: number; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-splitter direction=\"horizontal\" elevated persist-state></ui-splitter>",
      stencil: "<ui-splitter direction=\"horizontal\" elevated={true} persistState={true}></ui-splitter>",
      react: "export default function Example() {\n  return <ui-splitter direction=\"horizontal\" elevated persistState></ui-splitter>;\n}",
      angular: "<ui-splitter direction=\"horizontal\" [elevated]=\"true\" [persistState]=\"true\"></ui-splitter>",
      vue: "<template>\n  <UiSplitter direction=\"horizontal\" :elevated=\"true\" :persist-state=\"true\"></UiSplitter>\n</template>"
    }
  },
  {
    id: "stack",
    name: "Stack",
    tag: "ui-stack",
    category: "Layout",
    description: "Stack web component (<ui-stack>).",
    totalProps: 9,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 113,
    color: "#fb7185",
    props: [
      {
        name: "align",
        attr: "align",
        type: "\"center\" | \"end\" | \"start\" | \"stretch\"",
        default: "'center'",
        description: "Align items",
        options: [
          "center",
          "end",
          "start",
          "stretch"
        ]
      },
      {
        name: "direction",
        attr: "direction",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Stacking direction",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "dividerType",
        attr: "divider-type",
        type: "\"dashed\" | \"dotted\" | \"none\" | \"solid\"",
        default: "'solid'",
        description: "Type of divider to show",
        options: [
          "dashed",
          "dotted",
          "none",
          "solid"
        ]
      },
      {
        name: "justify",
        attr: "justify",
        type: "\"center\" | \"end\" | \"space-between\" | \"start\"",
        default: "'start'",
        description: "Justify content",
        options: [
          "center",
          "end",
          "space-between",
          "start"
        ]
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "0",
        description: "Maximum items to show before '+N'"
      },
      {
        name: "overlap",
        attr: "overlap",
        type: "boolean",
        default: "false",
        description: "Whether to overlap items"
      },
      {
        name: "showDividers",
        attr: "show-dividers",
        type: "boolean",
        default: "false",
        description: "Whether to show dividers between items"
      },
      {
        name: "spacing",
        attr: "spacing",
        type: "string",
        default: "'8px'",
        description: "Spacing between items (negative for overlap)"
      },
      {
        name: "wrap",
        attr: "wrap",
        type: "\"nowrap\" | \"wrap\" | \"wrap-reverse\"",
        default: "'nowrap'",
        description: "Flex wrap behavior",
        options: [
          "nowrap",
          "wrap",
          "wrap-reverse"
        ]
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-stack align=\"center\" direction=\"horizontal\" divider-type=\"solid\"></ui-stack>",
      stencil: "<ui-stack align=\"center\" direction=\"horizontal\" divider-type=\"solid\"></ui-stack>",
      react: "export default function Example() {\n  return <ui-stack align=\"center\" direction=\"horizontal\" divider-type=\"solid\"></ui-stack>;\n}",
      angular: "<ui-stack align=\"center\" direction=\"horizontal\" divider-type=\"solid\"></ui-stack>",
      vue: "<template>\n  <UiStack align=\"center\" direction=\"horizontal\" divider-type=\"solid\"></UiStack>\n</template>"
    }
  },
  {
    id: "step",
    name: "Step",
    tag: "ui-step",
    category: "Navigation",
    description: "Step web component (<ui-step>).",
    totalProps: 9,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 160,
    color: "#38bdf8",
    props: [
      {
        name: "badge",
        attr: "badge",
        type: "string",
        default: "null",
        description: ""
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "null",
        description: ""
      },
      {
        name: "renderContent",
        type: "() => any",
        default: "",
        description: "optional custom renderer - parent will call if present"
      },
      {
        name: "status",
        attr: "status",
        type: "\"active\" | \"complete\" | \"custom\" | \"disabled\" | \"error\" | \"upcoming\"",
        default: "'upcoming'",
        description: "",
        options: [
          "active",
          "complete",
          "custom",
          "disabled",
          "error",
          "upcoming"
        ]
      },
      {
        name: "stepTitle",
        attr: "step-title",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "subtitle",
        attr: "subtitle",
        type: "string",
        default: "null",
        description: ""
      },
      {
        name: "tooltip",
        attr: "tooltip",
        type: "string",
        default: "null",
        description: ""
      },
      {
        name: "validate",
        type: "() => boolean | Promise<boolean>",
        default: "",
        description: "A developer can provide a validation function on the DOM element before proceeding"
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-step disabled status=\"upcoming\"></ui-step>",
      stencil: "<ui-step disabled={true} status=\"upcoming\"></ui-step>",
      react: "export default function Example() {\n  return <ui-step disabled status=\"upcoming\"></ui-step>;\n}",
      angular: "<ui-step [disabled]=\"true\" status=\"upcoming\"></ui-step>",
      vue: "<template>\n  <UiStep :disabled=\"true\" status=\"upcoming\"></UiStep>\n</template>"
    }
  },
  {
    id: "stepper",
    name: "Stepper",
    tag: "ui-stepper",
    category: "Navigation",
    description: "Stepper web component (<ui-stepper>).",
    totalProps: 38,
    totalEvents: 9,
    variantsCount: 8,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 207,
    color: "#818cf8",
    props: [
      {
        name: "activeStep",
        attr: "active-step",
        type: "number",
        default: "0",
        description: "Current active step index (0-based)"
      },
      {
        name: "allowStepClick",
        attr: "allow-step-click",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "clickable",
        attr: "clickable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "colorScheme",
        attr: "color-scheme",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "compact",
        attr: "compact",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "customIcons",
        type: "{ disabled?: string; info?: string; error?: string; success?: string; pending?: string; warning?: string; active?: string; completed?: string; failed?: string; waiting?: string; \"in-progress\"?: string; }",
        default: "",
        description: "Custom icon for each status (optional)"
      },
      {
        name: "flow",
        attr: "flow",
        type: "\"linear\" | \"non-linear\"",
        default: "'linear'",
        description: "Flow type: linear or non-linear",
        options: [
          "linear",
          "non-linear"
        ]
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconLineFlex",
        attr: "icon-line-flex",
        type: "number",
        default: "",
        description: ""
      },
      {
        name: "iconLineHeight",
        attr: "icon-line-height",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "iconLineWidth",
        attr: "icon-line-width",
        type: "string",
        default: "",
        description: ""
      },
      {
        name: "keyboardNavigation",
        attr: "keyboard-navigation",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation"
      },
      {
        name: "labelFail",
        attr: "label-fail",
        type: "string",
        default: "'Mark Failed'",
        description: ""
      },
      {
        name: "labelFinish",
        attr: "label-finish",
        type: "string",
        default: "'Finish'",
        description: ""
      },
      {
        name: "labelNext",
        attr: "label-next",
        type: "string",
        default: "'Next'",
        description: ""
      },
      {
        name: "labelPlacement",
        attr: "label-placement",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Label placement (horizontal or vertical) - DEPRECATED: use labelPosition instead",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'right'",
        description: "Label position relative to step indicator",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "labelPrev",
        attr: "label-prev",
        type: "string",
        default: "'Previous'",
        description: "Customize control button labels"
      },
      {
        name: "maxVisibleSteps",
        attr: "max-visible-steps",
        type: "number",
        default: "5",
        description: "Maximum number of steps to show before collapsing"
      },
      {
        name: "mobileBreakpoint",
        attr: "mobile-breakpoint",
        type: "number",
        default: "768",
        description: ""
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation of the stepper (horizontal or vertical)",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "progressDot",
        attr: "progress-dot",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "responsive",
        attr: "responsive",
        type: "boolean",
        default: "true",
        description: "Enable responsive collapse/overflow"
      },
      {
        name: "scrollable",
        attr: "scrollable",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "shadow",
        attr: "shadow",
        type: "boolean",
        default: "true",
        description: "Whether to use Shadow DOM"
      },
      {
        name: "showControls",
        attr: "show-controls",
        type: "boolean",
        default: "false",
        description: "Show optional control buttons (Next/Previous/Finish/Failed)"
      },
      {
        name: "showDescriptions",
        attr: "show-descriptions",
        type: "boolean",
        default: "false",
        description: "Whether to show step descriptions"
      },
      {
        name: "showNumbers",
        attr: "show-numbers",
        type: "boolean",
        default: "true",
        description: "Whether to show step numbers"
      },
      {
        name: "showProgress",
        attr: "show-progress",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showTooltips",
        attr: "show-tooltips",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size of the stepper",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "stepShape",
        attr: "step-shape",
        type: "\"circle\" | \"square\" | \"square-active\"",
        default: "'circle'",
        description: "Shape of the step indicator (circle, square, or square-active)",
        options: [
          "circle",
          "square",
          "square-active"
        ]
      },
      {
        name: "steps",
        attr: "steps",
        type: "StepperStep[] | string",
        default: "[]",
        description: "Steps can be provided as an array or a JSON string in the attribute"
      },
      {
        name: "stepsPerPage",
        attr: "steps-per-page",
        type: "number",
        default: "0",
        description: ""
      },
      {
        name: "theme",
        type: "StepperTheme",
        default: "",
        description: "Theme configuration with CSS variables"
      },
      {
        name: "validateBeforeNext",
        type: "(stepIndex: number) => boolean | Promise<boolean>",
        default: "",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"filled\" | \"inline\" | \"minimal\" | \"navigation\" | \"outlined\" | \"panel\" | \"snack\"",
        default: "'default'",
        description: "Stepper variant style",
        options: [
          "default",
          "filled",
          "inline",
          "minimal",
          "navigation",
          "outlined",
          "panel",
          "snack"
        ]
      }
    ],
    events: [
      {
        name: "progressUpdate",
        detail: "number",
        description: ""
      },
      {
        name: "stepLoading",
        detail: "boolean",
        description: ""
      },
      {
        name: "stepperChange",
        detail: "{ index: number; step: StepperStep; previousIndex: number; }",
        description: "Event emitted when active step changes"
      },
      {
        name: "stepperFail",
        detail: "{ index: number; step: StepperStep; }",
        description: ""
      },
      {
        name: "stepperFinish",
        detail: "{ index: number; step: StepperStep; }",
        description: ""
      },
      {
        name: "stepperNext",
        detail: "{ index: number; step: StepperStep; }",
        description: ""
      },
      {
        name: "stepperPrevious",
        detail: "{ index: number; step: StepperStep; }",
        description: "Events emitted when control buttons are clicked"
      },
      {
        name: "stepperValidationError",
        detail: "{ index: number; step: StepperStep; error: string; }",
        description: "Event emitted when validation fails"
      },
      {
        name: "stepValidation",
        detail: "{ step: number; valid: boolean; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-stepper clickable color-scheme=\"primary\" compact></ui-stepper>",
      stencil: "<ui-stepper clickable={true} color-scheme=\"primary\" compact={true}></ui-stepper>",
      react: "export default function Example() {\n  return <ui-stepper clickable color-scheme=\"primary\" compact></ui-stepper>;\n}",
      angular: "<ui-stepper [clickable]=\"true\" color-scheme=\"primary\" [compact]=\"true\"></ui-stepper>",
      vue: "<template>\n  <UiStepper :clickable=\"true\" color-scheme=\"primary\" :compact=\"true\"></UiStepper>\n</template>"
    }
  },
  {
    id: "tag",
    name: "Tag",
    tag: "ui-tag",
    category: "Data Display",
    description: "Tag web component (<ui-tag>).",
    totalProps: 37,
    totalEvents: 2,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 348,
    color: "#34d399",
    props: [
      {
        name: "animation",
        attr: "animation",
        type: "\"fade\" | \"none\" | \"rotate\" | \"scale\" | \"slide\"",
        default: "'scale'",
        description: "Animation type for opening/closing",
        options: [
          "fade",
          "none",
          "rotate",
          "scale",
          "slide"
        ]
      },
      {
        name: "animationDuration",
        attr: "animation-duration",
        type: "number",
        default: "300",
        description: "Animation duration in milliseconds"
      },
      {
        name: "autoColor",
        attr: "auto-color",
        type: "boolean",
        default: "false",
        description: "Whether to generate color automatically based on label hash"
      },
      {
        name: "badge",
        attr: "badge",
        type: "number | string",
        default: "",
        description: "Badge content to display"
      },
      {
        name: "badgeColor",
        attr: "badge-color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Badge color variant",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "checkable",
        attr: "checkable",
        type: "boolean",
        default: "false",
        description: "Whether the tag is checkable (selectable)"
      },
      {
        name: "checked",
        attr: "checked",
        type: "boolean",
        default: "false",
        description: "Whether the tag is checked (for checkable tags)"
      },
      {
        name: "clickable",
        attr: "clickable",
        type: "boolean",
        default: "false",
        description: "Whether the tag is clickable (shows pointer and hover effect)"
      },
      {
        name: "closeIcon",
        attr: "close-icon",
        type: "string",
        default: "",
        description: "Custom close icon (replacing the default Ionicon 'close')"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'default'",
        description: "Color variant",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "counter",
        attr: "counter",
        type: "number | string",
        default: "",
        description: "Counter value to display at the end of the tag"
      },
      {
        name: "customColor",
        attr: "custom-color",
        type: "string",
        default: "",
        description: "Custom background color hex string"
      },
      {
        name: "customTextColor",
        attr: "custom-text-color",
        type: "string",
        default: "",
        description: "Custom text color hex string"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the tag is disabled"
      },
      {
        name: "elevation",
        attr: "elevation",
        type: "0 | 1 | 2 | 3",
        default: "0",
        description: "Elevation level (0-3)"
      },
      {
        name: "gradient",
        attr: "gradient",
        type: "string",
        default: "",
        description: "Gradient variant (e.g., 'blue-purple', 'green-teal')"
      },
      {
        name: "icon",
        attr: "icon",
        type: "string",
        default: "",
        description: "Icon to display"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Icon library (unifying with other components)",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"left\" | \"right\"",
        default: "'left'",
        description: "Explicit icon position (unifying names)",
        options: [
          "left",
          "right"
        ]
      },
      {
        name: "iconSize",
        attr: "icon-size",
        type: "string",
        default: "'1.14em'",
        description: "Size of the icon (e.g., '14px', '1em')"
      },
      {
        name: "iconSpin",
        attr: "icon-spin",
        type: "boolean",
        default: "false",
        description: "Whether to make the icon spin (useful for loading/syncing)"
      },
      {
        name: "image",
        attr: "image",
        type: "string",
        default: "",
        description: "Image source URL to display at the start"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "",
        description: "Tag label text"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Whether the tag is in a loading state"
      },
      {
        name: "maxWidth",
        attr: "max-width",
        type: "string",
        default: "",
        description: "Maximum width with text truncation"
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\" | \"vertical-rotated\" | \"vertical-text\"",
        default: "'horizontal'",
        description: "Orientation of the tag: Orientation | 'vertical-text' | 'vertical-rotated'",
        options: [
          "horizontal",
          "vertical",
          "vertical-rotated",
          "vertical-text"
        ]
      },
      {
        name: "pulse",
        attr: "pulse",
        type: "boolean",
        default: "false",
        description: "Whether to show a pulse animation (for attention)"
      },
      {
        name: "removable",
        attr: "removable",
        type: "boolean",
        default: "false",
        description: "Whether tag is removable"
      },
      {
        name: "rtl",
        attr: "rtl",
        type: "boolean",
        default: "false",
        description: "High-Fidelity: RTL support"
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"coupon\" | \"default\" | \"pill\" | \"ribbon\" | \"rounded\" | \"square\" | \"ticket\"",
        default: "'rounded'",
        description: "Shape of the tag: Shape | 'ribbon' | 'ticket' | 'coupon'",
        options: [
          "circle",
          "coupon",
          "default",
          "pill",
          "ribbon",
          "rounded",
          "square",
          "ticket"
        ]
      },
      {
        name: "showTooltip",
        attr: "show-tooltip",
        type: "boolean",
        default: "false",
        description: "Show tooltip on hover (useful with maxWidth)"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Size of the tag",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "Whether to show as a skeleton (placeholder)"
      },
      {
        name: "tooltip",
        attr: "tooltip",
        type: "string",
        default: "",
        description: "Tooltip text override for hover"
      },
      {
        name: "userAvatar",
        attr: "user-avatar",
        type: "string",
        default: "",
        description: "User avatar URL"
      },
      {
        name: "value",
        attr: "value",
        type: "string",
        default: "",
        description: "Underlying value for the tag (useful for IDs)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"dot\" | \"filled\" | \"light\" | \"outlined\"",
        default: "'filled'",
        description: "Tag variant",
        options: [
          "dot",
          "filled",
          "light",
          "outlined"
        ]
      }
    ],
    events: [
      {
        name: "tagCheck",
        detail: "boolean",
        description: "Event emitted when checked state changes"
      },
      {
        name: "tagRemove",
        detail: "void",
        description: "Event emitted when tag is removed"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-tag animation=\"scale\" auto-color badge-color=\"default\"></ui-tag>",
      stencil: "<ui-tag animation=\"scale\" autoColor={true} badge-color=\"default\"></ui-tag>",
      react: "export default function Example() {\n  return <ui-tag animation=\"scale\" autoColor badge-color=\"default\"></ui-tag>;\n}",
      angular: "<ui-tag animation=\"scale\" [autoColor]=\"true\" badge-color=\"default\"></ui-tag>",
      vue: "<template>\n  <UiTag animation=\"scale\" :auto-color=\"true\" badge-color=\"default\"></UiTag>\n</template>"
    }
  },
  {
    id: "tag-group",
    name: "Tag Group",
    tag: "ui-tag-group",
    category: "Data Display",
    description: "Tag Group web component (<ui-tag-group>).",
    totalProps: 20,
    totalEvents: 2,
    variantsCount: 4,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 35,
    color: "#f472b6",
    props: [
      {
        name: "animation",
        attr: "animation",
        type: "\"fade\" | \"none\" | \"rotate\" | \"scale\" | \"slide\"",
        default: "",
        description: "Bulk animation for all tags in group",
        options: [
          "fade",
          "none",
          "rotate",
          "scale",
          "slide"
        ]
      },
      {
        name: "caseSensitive",
        attr: "case-sensitive",
        type: "boolean",
        default: "false",
        description: "Case sensitivity for search and duplicates"
      },
      {
        name: "collapsible",
        attr: "collapsible",
        type: "boolean",
        default: "false",
        description: "Whether overflow tags can be toggled to show (Premium)"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "",
        description: "Bulk color for all tags in group",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "creatable",
        attr: "creatable",
        type: "boolean",
        default: "false",
        description: "Whether users can add new tags (Premium)"
      },
      {
        name: "delimiters",
        type: "string[]",
        default: "[',', ' ']",
        description: "Delimiters to trigger tag creation"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "0",
        description: "Maximum number of tags to display before hiding and showing (+N)"
      },
      {
        name: "overlap",
        attr: "overlap",
        type: "boolean",
        default: "false",
        description: "Whether to overlap tags (avatar style)"
      },
      {
        name: "placeholder",
        attr: "placeholder",
        type: "string",
        default: "'Add tag...'",
        description: "Placeholder text when group is empty (creatable mode)"
      },
      {
        name: "readOnly",
        attr: "read-only",
        type: "boolean",
        default: "false",
        description: "Whether the entire group is read-only (disables all selection/removal)"
      },
      {
        name: "removable",
        attr: "removable",
        type: "boolean",
        default: "false",
        description: "Whether all tags in group should be removable"
      },
      {
        name: "rounded",
        attr: "rounded",
        type: "boolean",
        default: "false",
        description: "Whether all tags in group should be rounded"
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "false",
        description: "Whether tags are filterable via search (Premium)"
      },
      {
        name: "selectionMode",
        attr: "selection-mode",
        type: "\"multiple\" | \"none\" | \"single\"",
        default: "'none'",
        description: "Selection mode: 'none', 'single', or 'multiple'",
        options: [
          "multiple",
          "none",
          "single"
        ]
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"coupon\" | \"default\" | \"pill\" | \"ribbon\" | \"rounded\" | \"square\" | \"ticket\"",
        default: "",
        description: "Bulk shape for all tags in group",
        options: [
          "circle",
          "coupon",
          "default",
          "pill",
          "ribbon",
          "rounded",
          "square",
          "ticket"
        ]
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "",
        description: "Bulk size for all tags in group",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "skeleton",
        attr: "skeleton",
        type: "boolean",
        default: "false",
        description: "Whether all tags in group should show as skeletons"
      },
      {
        name: "spacing",
        attr: "spacing",
        type: "string",
        default: "'8px'",
        description: "Spacing between tags"
      },
      {
        name: "value",
        attr: "value",
        type: "string | string[]",
        default: "[]",
        description: "Selected values (for checkable tags)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"dot\" | \"filled\" | \"light\" | \"outlined\"",
        default: "",
        description: "Bulk variant for all tags in group",
        options: [
          "dot",
          "filled",
          "light",
          "outlined"
        ]
      }
    ],
    events: [
      {
        name: "tagAdd",
        detail: "string",
        description: "Event emitted when a new tag is added"
      },
      {
        name: "tagGroupChange",
        detail: "string | string[]",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-tag-group animation=\"fade\" case-sensitive collapsible></ui-tag-group>",
      stencil: "<ui-tag-group animation=\"fade\" caseSensitive={true} collapsible={true}></ui-tag-group>",
      react: "export default function Example() {\n  return <ui-tag-group animation=\"fade\" caseSensitive collapsible></ui-tag-group>;\n}",
      angular: "<ui-tag-group animation=\"fade\" [caseSensitive]=\"true\" [collapsible]=\"true\"></ui-tag-group>",
      vue: "<template>\n  <UiTagGroup animation=\"fade\" :case-sensitive=\"true\" :collapsible=\"true\"></UiTagGroup>\n</template>"
    }
  },
  {
    id: "timeline",
    name: "Timeline",
    tag: "ui-timeline",
    category: "Data Display",
    description: "Timeline web component (<ui-timeline>).",
    totalProps: 25,
    totalEvents: 2,
    variantsCount: 6,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 82,
    color: "#fbbf24",
    props: [
      {
        name: "align",
        attr: "align",
        type: "\"alternate\" | \"bottom\" | \"center\" | \"left\" | \"right\" | \"top\"",
        default: "'left'",
        description: "Alignment/Positioning",
        options: [
          "alternate",
          "bottom",
          "center",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "animateOnScroll",
        attr: "animate-on-scroll",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "clickable",
        attr: "clickable",
        type: "boolean",
        default: "false",
        description: "Whether items are interactive/clickable (Premium)"
      },
      {
        name: "columns",
        attr: "columns",
        type: "number",
        default: "4",
        description: ""
      },
      {
        name: "compact",
        attr: "compact",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "dateFormat",
        attr: "date-format",
        type: "string",
        default: "'short'",
        description: ""
      },
      {
        name: "dotColor",
        attr: "dot-color",
        type: "string",
        default: "'#3bf673'",
        description: ""
      },
      {
        name: "dotSize",
        attr: "dot-size",
        type: "number",
        default: "12",
        description: ""
      },
      {
        name: "events",
        attr: "events",
        type: "TimelineEvent[] | string",
        default: "[]",
        description: "Events definition"
      },
      {
        name: "flow",
        attr: "flow",
        type: "\"linear\" | \"non-linear\"",
        default: "'linear'",
        description: "Flow type",
        options: [
          "linear",
          "non-linear"
        ]
      },
      {
        name: "iconPosition",
        attr: "icon-position",
        type: "\"bottom\" | \"center\" | \"top\"",
        default: "'center'",
        description: "",
        options: [
          "bottom",
          "center",
          "top"
        ]
      },
      {
        name: "lineColor",
        attr: "line-color",
        type: "string",
        default: "'#3bf673'",
        description: ""
      },
      {
        name: "lineWidth",
        attr: "line-width",
        type: "number",
        default: "2",
        description: ""
      },
      {
        name: "marker",
        attr: "marker",
        type: "\"dot\" | \"icon\" | \"number\"",
        default: "'dot'",
        description: "Marker Type",
        options: [
          "dot",
          "icon",
          "number"
        ]
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "Layout mode",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "multiline",
        attr: "multiline",
        type: "boolean",
        default: "false",
        description: "Multi-line wrapping"
      },
      {
        name: "pending",
        attr: "pending",
        type: "boolean",
        default: "false",
        description: "Display a pending state at the end (dashed line)"
      },
      {
        name: "reverse",
        attr: "reverse",
        type: "boolean",
        default: "false",
        description: "Reverse the order of events"
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "false",
        description: "Enable integrated search filtering (Premium)"
      },
      {
        name: "showDates",
        attr: "show-dates",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showDots",
        attr: "show-dots",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showLine",
        attr: "show-line",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "theme",
        type: "TimelineTheme",
        default: "",
        description: "Theme variables"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"dots-only\" | \"filled\" | \"minimal\" | \"outlined\" | \"panel\"",
        default: "'default'",
        description: "Visual Variant",
        options: [
          "default",
          "dots-only",
          "filled",
          "minimal",
          "outlined",
          "panel"
        ]
      },
      {
        name: "wrap",
        attr: "wrap",
        type: "boolean",
        default: "false",
        description: ""
      }
    ],
    events: [
      {
        name: "itemClick",
        detail: "TimelineEvent",
        description: "Emitted when an item is clicked"
      },
      {
        name: "itemVisible",
        detail: "{ item: TimelineEvent; index: number; }",
        description: "Emitted when a timeline item becomes visible (for animation)"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-timeline align=\"left\" animate-on-scroll clickable></ui-timeline>",
      stencil: "<ui-timeline align=\"left\" animateOnScroll={true} clickable={true}></ui-timeline>",
      react: "export default function Example() {\n  return <ui-timeline align=\"left\" animateOnScroll clickable></ui-timeline>;\n}",
      angular: "<ui-timeline align=\"left\" [animateOnScroll]=\"true\" [clickable]=\"true\"></ui-timeline>",
      vue: "<template>\n  <UiTimeline align=\"left\" :animate-on-scroll=\"true\" :clickable=\"true\"></UiTimeline>\n</template>"
    }
  },
  {
    id: "timer",
    name: "Timer",
    tag: "ui-timer",
    category: "Data Display",
    description: "Timer web component (<ui-timer>).",
    totalProps: 21,
    totalEvents: 9,
    variantsCount: 2,
    status: "stable",
    orbitRadius: 460,
    orbitSpeed: 80,
    angleOffset: 129,
    color: "#fb7185",
    props: [
      {
        name: "activeStep",
        attr: "active-step",
        type: "number",
        default: "0",
        description: "Current active step index"
      },
      {
        name: "alertThreshold",
        attr: "alert-threshold",
        type: "number",
        default: "10",
        description: "Percentage threshold for alert (countdown only)"
      },
      {
        name: "autoStart",
        attr: "auto-start",
        type: "boolean",
        default: "false",
        description: "Whether to auto-start the timer"
      },
      {
        name: "collapse",
        attr: "collapse",
        type: "boolean",
        default: "false",
        description: "Automatically switch to the compact layout when the container becomes narrow"
      },
      {
        name: "duration",
        attr: "duration",
        type: "number",
        default: "0",
        description: "Duration in seconds for simple countdown/stopwatch"
      },
      {
        name: "enableNotifications",
        attr: "enable-notifications",
        type: "boolean",
        default: "false",
        description: "Whether to enable browser notifications"
      },
      {
        name: "enableSound",
        attr: "enable-sound",
        type: "boolean",
        default: "false",
        description: "Whether to enable sound alerts"
      },
      {
        name: "flow",
        attr: "flow",
        type: "\"linear\" | \"non-linear\"",
        default: "'linear'",
        description: "Flow type",
        options: [
          "linear",
          "non-linear"
        ]
      },
      {
        name: "format",
        attr: "format",
        type: "\"default\" | \"human\" | \"simple\"",
        default: "'default'",
        description: "Time formatting style",
        options: [
          "default",
          "human",
          "simple"
        ]
      },
      {
        name: "loop",
        attr: "loop",
        type: "boolean",
        default: "false",
        description: "Loop back to start on completion"
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"countdown\" | \"stopwatch\"",
        default: "'countdown'",
        description: "Timer mode",
        options: [
          "countdown",
          "stopwatch"
        ]
      },
      {
        name: "notificationBody",
        attr: "notification-body",
        type: "string",
        default: "'{{label}} phase finished.'",
        description: "Template for notification body when a phase completes. Use {{label}} placeholder."
      },
      {
        name: "notificationTitle",
        attr: "notification-title",
        type: "string",
        default: "'Timer Complete'",
        description: "Template for notification title when a phase completes. Use {{label}} placeholder."
      },
      {
        name: "persist",
        attr: "persist",
        type: "string",
        default: "",
        description: "Whether to persist the timer state in local storage"
      },
      {
        name: "precision",
        attr: "precision",
        type: "\"milliseconds\" | \"seconds\"",
        default: "'seconds'",
        description: "Precision mode",
        options: [
          "milliseconds",
          "seconds"
        ]
      },
      {
        name: "progressType",
        attr: "progress-type",
        type: "\"circular\" | \"linear\"",
        default: "'circular'",
        description: "Progress visualization type",
        options: [
          "circular",
          "linear"
        ]
      },
      {
        name: "steps",
        attr: "steps",
        type: "TimerStep[] | string",
        default: "[]",
        description: "Steps definition"
      },
      {
        name: "targetDate",
        attr: "target-date",
        type: "string",
        default: "",
        description: "Target date for countdown (ISO string or date string)"
      },
      {
        name: "theme",
        type: "TimerTheme",
        default: "",
        description: "Theme variables"
      },
      {
        name: "useShadow",
        attr: "use-shadow",
        type: "boolean",
        default: "true",
        description: "Toggle the outer drop-shadow effect (true by default)"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"compact\" | \"full\"",
        default: "'full'",
        description: "Display variant",
        options: [
          "compact",
          "full"
        ]
      }
    ],
    events: [
      {
        name: "timerAllComplete",
        detail: "void",
        description: ""
      },
      {
        name: "timerComplete",
        detail: "{ stepIndex: number; }",
        description: ""
      },
      {
        name: "timerGoTo",
        detail: "{ index: number; step: TimerStep; }",
        description: ""
      },
      {
        name: "timerLap",
        detail: "{ time: number; lapIndex: number; }",
        description: ""
      },
      {
        name: "timerNext",
        detail: "{ index: number; step: TimerStep; }",
        description: ""
      },
      {
        name: "timerPause",
        detail: "{ stepIndex: number; }",
        description: ""
      },
      {
        name: "timerPrev",
        detail: "{ index: number; step: TimerStep; }",
        description: ""
      },
      {
        name: "timerStart",
        detail: "{ stepIndex: number; }",
        description: ""
      },
      {
        name: "timerTick",
        detail: "{ remaining: number; stepIndex: number; mode: TimerMode; }",
        description: "Events"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-timer auto-start collapse enable-notifications></ui-timer>",
      stencil: "<ui-timer autoStart={true} collapse={true} enableNotifications={true}></ui-timer>",
      react: "export default function Example() {\n  return <ui-timer autoStart collapse enableNotifications></ui-timer>;\n}",
      angular: "<ui-timer [autoStart]=\"true\" [collapse]=\"true\" [enableNotifications]=\"true\"></ui-timer>",
      vue: "<template>\n  <UiTimer :auto-start=\"true\" :collapse=\"true\" :enable-notifications=\"true\"></UiTimer>\n</template>"
    }
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    tag: "ui-toggle-group",
    category: "Forms",
    description: "Toggle Group web component (<ui-toggle-group>).",
    totalProps: 33,
    totalEvents: 4,
    variantsCount: 5,
    status: "stable",
    orbitRadius: 180,
    orbitSpeed: 38,
    angleOffset: 176,
    color: "#38bdf8",
    props: [
      {
        name: "collapsed",
        attr: "collapsed",
        type: "boolean",
        default: "false",
        description: "Initially collapsed"
      },
      {
        name: "collapsible",
        attr: "collapsible",
        type: "boolean",
        default: "false",
        description: "Enable expand/collapse"
      },
      {
        name: "color",
        attr: "color",
        type: "\"borderless\" | \"danger\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'primary'",
        description: "Semantic color passed to children",
        options: [
          "borderless",
          "danger",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "columns",
        attr: "columns",
        type: "number",
        default: "3",
        description: "Grid columns count"
      },
      {
        name: "compact",
        attr: "compact",
        type: "boolean",
        default: "false",
        description: "Compact mode for tighter spacing"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state for the entire group"
      },
      {
        name: "enableAnimation",
        attr: "enable-animation",
        type: "boolean",
        default: "true",
        description: "Enable animations"
      },
      {
        name: "errorMessage",
        attr: "error-message",
        type: "string",
        default: "''",
        description: "Error message when invalid"
      },
      {
        name: "helperText",
        attr: "helper-text",
        type: "string",
        default: "''",
        description: "Helper text below group"
      },
      {
        name: "invalid",
        attr: "invalid",
        type: "boolean",
        default: "false",
        description: "Invalid state"
      },
      {
        name: "isDraggable",
        attr: "is-draggable",
        type: "boolean",
        default: "false",
        description: "Enable drag to reorder"
      },
      {
        name: "keyboardNavigation",
        attr: "keyboard-navigation",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation"
      },
      {
        name: "label",
        attr: "label",
        type: "string",
        default: "''",
        description: "Group label"
      },
      {
        name: "labelPosition",
        attr: "label-position",
        type: "\"left\" | \"right\"",
        default: "'right'",
        description: "Label position for children",
        options: [
          "left",
          "right"
        ]
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"grid\" | \"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Layout orientation",
        options: [
          "grid",
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "loadingText",
        attr: "loading-text",
        type: "string",
        default: "'Loading options...'",
        description: "Loading text"
      },
      {
        name: "maxSelections",
        attr: "max-selections",
        type: "number",
        default: "0",
        description: "Maximum selections (multiple mode)"
      },
      {
        name: "name",
        attr: "name",
        type: "string",
        default: "''",
        description: "Group name for forms"
      },
      {
        name: "options",
        attr: "options",
        type: "string | { value: string; label: string; icon?: string; disabled?: boolean; }[]",
        default: "[]",
        description: "Options array (label, value, icon, disabled)"
      },
      {
        name: "readonly",
        attr: "readonly",
        type: "boolean",
        default: "false",
        description: "Readonly state"
      },
      {
        name: "required",
        attr: "required",
        type: "boolean",
        default: "false",
        description: "Required field indicator"
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search toggles...'",
        description: "Search placeholder text"
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "false",
        description: "Enable search/filter"
      },
      {
        name: "selectionMode",
        attr: "selection-mode",
        type: "\"multiple\" | \"none\" | \"single\"",
        default: "'single'",
        description: "Selection mode",
        options: [
          "multiple",
          "none",
          "single"
        ]
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"circle\" | \"default\" | \"pill\" | \"rounded\" | \"square\"",
        default: "'default'",
        description: "Shape passed to children",
        options: [
          "circle",
          "default",
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showIcons",
        attr: "show-icons",
        type: "boolean",
        default: "false",
        description: "Show icons in children"
      },
      {
        name: "showSelectAll",
        attr: "show-select-all",
        type: "boolean",
        default: "false",
        description: "Show select all/none controls (multiple mode only)"
      },
      {
        name: "showSkeleton",
        attr: "show-skeleton",
        type: "boolean",
        default: "false",
        description: "Show skeleton loading state"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\" | \"xxxs\"",
        default: "'md'",
        description: "Size passed to children",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl",
          "xs",
          "xxl",
          "xxs",
          "xxxl",
          "xxxs"
        ]
      },
      {
        name: "skeletonCount",
        attr: "skeleton-count",
        type: "number",
        default: "3",
        description: "Number of skeletons to show"
      },
      {
        name: "value",
        attr: "value",
        type: "string | string[]",
        default: "[]",
        description: "Current selected value or array of values"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"glass\" | \"outlined\" | \"raised\" | \"segmented\" | \"solid\"",
        default: "'solid'",
        description: "Material archetype passed to children",
        options: [
          "glass",
          "outlined",
          "raised",
          "segmented",
          "solid"
        ]
      }
    ],
    events: [
      {
        name: "toggleGroupChange",
        detail: "{ value: string | string[]; }",
        description: ""
      },
      {
        name: "toggleGroupCollapse",
        detail: "{ collapsed: boolean; }",
        description: ""
      },
      {
        name: "toggleGroupReorder",
        detail: "{ oldIndex: number; newIndex: number; items: any[]; }",
        description: ""
      },
      {
        name: "toggleGroupSearch",
        detail: "{ query: string; results: any[]; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-toggle-group collapsed collapsible color=\"primary\"></ui-toggle-group>",
      stencil: "<ui-toggle-group collapsed={true} collapsible={true} color=\"primary\"></ui-toggle-group>",
      react: "export default function Example() {\n  return <ui-toggle-group collapsed collapsible color=\"primary\"></ui-toggle-group>;\n}",
      angular: "<ui-toggle-group [collapsed]=\"true\" [collapsible]=\"true\" color=\"primary\"></ui-toggle-group>",
      vue: "<template>\n  <UiToggleGroup :collapsed=\"true\" :collapsible=\"true\" color=\"primary\"></UiToggleGroup>\n</template>"
    }
  },
  {
    id: "toolbar",
    name: "Toolbar",
    tag: "ui-toolbar",
    category: "Navigation",
    description: "Toolbar web component (<ui-toolbar>).",
    totalProps: 26,
    totalEvents: 4,
    variantsCount: 9,
    status: "stable",
    orbitRadius: 220,
    orbitSpeed: 44,
    angleOffset: 223,
    color: "#818cf8",
    props: [
      {
        name: "alignment",
        attr: "alignment",
        type: "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\"",
        default: "'start'",
        description: "Alignment of items along the main axis.",
        options: [
          "center",
          "end",
          "space-around",
          "space-between",
          "space-evenly",
          "start"
        ]
      },
      {
        name: "bordered",
        attr: "bordered",
        type: "boolean",
        default: "false",
        description: "Show a border around the toolbar."
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the toolbar is in a disabled state."
      },
      {
        name: "elevation",
        attr: "elevation",
        type: "0 | 1 | 2 | 3 | 4",
        default: "1",
        description: "Elevation shadow level (0–4)."
      },
      {
        name: "gap",
        attr: "gap",
        type: "string",
        default: "'4px'",
        description: "Gap between items (CSS value)."
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'lucide'",
        description: "Default icon library for items that don't specify one.",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "iconOnly",
        attr: "icon-only",
        type: "boolean",
        default: "false",
        description: "Make label hidden (icon-only) for button items by default."
      },
      {
        name: "inputDebounce",
        attr: "input-debounce",
        type: "number",
        default: "300",
        description: "Debounce time in ms for input/search items."
      },
      {
        name: "items",
        attr: "items",
        type: "ToolbarItem[] | string",
        default: "[]",
        description: "Flat list of items (all rendered in the main content zone)."
      },
      {
        name: "keyboardNav",
        attr: "keyboard-nav",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation across items."
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Whether the toolbar is in a loading state."
      },
      {
        name: "maxSize",
        attr: "max-size",
        type: "string",
        default: "",
        description: "Maximum height (horizontal) or width (vertical) (CSS value)."
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Orientation: horizontal or vertical.",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "overflowIcon",
        attr: "overflow-icon",
        type: "string",
        default: "'more-horizontal'",
        description: "Icon for the overflow more button."
      },
      {
        name: "overflowLabel",
        attr: "overflow-label",
        type: "string",
        default: "'More'",
        description: "Label for the overflow \"More\" button."
      },
      {
        name: "overflowStrategy",
        attr: "overflow-strategy",
        type: "\"dropdown\" | \"hidden\" | \"scroll\" | \"wrap\"",
        default: "'dropdown'",
        description: "Overflow handling strategy.",
        options: [
          "dropdown",
          "hidden",
          "scroll",
          "wrap"
        ]
      },
      {
        name: "padding",
        attr: "padding",
        type: "string",
        default: "'8px 12px'",
        description: "Padding inside the toolbar (CSS value)."
      },
      {
        name: "position",
        attr: "position",
        type: "\"absolute\" | \"fixed\" | \"static\" | \"sticky\"",
        default: "'static'",
        description: "Positioning strategy.",
        options: [
          "absolute",
          "fixed",
          "static",
          "sticky"
        ]
      },
      {
        name: "reorderable",
        attr: "reorderable",
        type: "boolean",
        default: "false",
        description: "Enable drag-and-drop reordering of toolbar items."
      },
      {
        name: "rounded",
        attr: "rounded",
        type: "boolean",
        default: "false",
        description: "Rounded corners for the whole bar."
      },
      {
        name: "schema",
        attr: "schema",
        type: "ToolbarSchema | string",
        default: "null",
        description: "JSON string or object describing the full toolbar layout. Schema: { left?: ToolbarItem[], center?: ToolbarItem[], right?: ToolbarItem[] }"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\" | \"xl\"",
        default: "'md'",
        description: "Size of toolbar items.",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small",
          "xl"
        ]
      },
      {
        name: "stickyEdge",
        attr: "sticky-edge",
        type: "\"bottom\" | \"left\" | \"right\" | \"top\"",
        default: "'top'",
        description: "Which edge to stick to when position is sticky or fixed.",
        options: [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      {
        name: "toolbarAriaLabel",
        attr: "toolbar-aria-label",
        type: "string",
        default: "'Toolbar'",
        description: "Accessible label for the toolbar element."
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"dark\" | \"default\" | \"elevated\" | \"glass\" | \"inline\" | \"minimal\" | \"outlined\" | \"primary\" | \"secondary\"",
        default: "'default'",
        description: "Visual variant of the toolbar.",
        options: [
          "dark",
          "default",
          "elevated",
          "glass",
          "inline",
          "minimal",
          "outlined",
          "primary",
          "secondary"
        ]
      },
      {
        name: "zoneDividers",
        attr: "zone-dividers",
        type: "boolean",
        default: "false",
        description: "Show dividers between zones (left/center/right)."
      }
    ],
    events: [
      {
        name: "toolbarItemChange",
        detail: "ToolbarItemChangeEvent",
        description: "Fired when an input, dropdown, toggle, or switch value changes."
      },
      {
        name: "toolbarItemClick",
        detail: "ToolbarItemClickEvent",
        description: "Fired when a button or clickable item is activated."
      },
      {
        name: "toolbarOverflowChange",
        detail: "ToolbarOverflowChangeEvent",
        description: "Fired when the visible/overflowed item set changes."
      },
      {
        name: "toolbarReorder",
        detail: "ToolbarItem[]",
        description: "Fired after a drag-and-drop reorder."
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-toolbar alignment=\"start\" bordered disabled></ui-toolbar>",
      stencil: "<ui-toolbar alignment=\"start\" bordered={true} disabled={true}></ui-toolbar>",
      react: "export default function Example() {\n  return <ui-toolbar alignment=\"start\" bordered disabled></ui-toolbar>;\n}",
      angular: "<ui-toolbar alignment=\"start\" [bordered]=\"true\" [disabled]=\"true\"></ui-toolbar>",
      vue: "<template>\n  <UiToolbar alignment=\"start\" :bordered=\"true\" :disabled=\"true\"></UiToolbar>\n</template>"
    }
  },
  {
    id: "tooltip",
    name: "Tooltip",
    tag: "ui-tooltip",
    category: "Feedback",
    description: "Tooltip web component (<ui-tooltip>).",
    totalProps: 43,
    totalEvents: 10,
    variantsCount: 26,
    status: "stable",
    orbitRadius: 260,
    orbitSpeed: 50,
    angleOffset: 270,
    color: "#a855f7",
    props: [
      {
        name: "allowNested",
        attr: "allow-nested",
        type: "boolean",
        default: "false",
        description: "Allow nested tooltips"
      },
      {
        name: "animation",
        attr: "animation",
        type: "\"bounce\" | \"expand\" | \"fade\" | \"fade-down\" | \"fade-in\" | \"fade-in-out\" | \"fade-left\" | \"fade-out\" | \"fade-right\" | \"fade-up\" | \"flip\" | \"flip-x\" | \"flip-y\" | \"float\" | \"none\" | \"pulse\" | \"ripple\" | \"rotate\" | \"scale\" | \"shake\" | \"shimmer\" | \"slide\" | \"slide-down\" | \"slide-in\" | \"slide-in-out\" | \"slide-left\" | \"slide-left-right\" | \"slide-out\" | \"slide-right\" | \"slide-up\" | \"slide-up-down\" | \"spin\" | \"spring\" | \"swing\" | \"wave\" | \"wobble\" | \"zoom\" | \"zoom-in\" | \"zoom-out\"",
        default: "'fade-in'",
        description: "Animation type",
        options: [
          "bounce",
          "expand",
          "fade",
          "fade-down",
          "fade-in",
          "fade-in-out",
          "fade-left",
          "fade-out",
          "fade-right",
          "fade-up",
          "flip",
          "flip-x",
          "flip-y",
          "float",
          "none",
          "pulse",
          "ripple",
          "rotate",
          "scale",
          "shake",
          "shimmer",
          "slide",
          "slide-down",
          "slide-in",
          "slide-in-out",
          "slide-left",
          "slide-left-right",
          "slide-out",
          "slide-right",
          "slide-up",
          "slide-up-down",
          "spin",
          "spring",
          "swing",
          "wave",
          "wobble",
          "zoom",
          "zoom-in",
          "zoom-out"
        ]
      },
      {
        name: "arrow",
        attr: "arrow",
        type: "boolean",
        default: "true",
        description: "Show arrow pointer"
      },
      {
        name: "arrowSize",
        attr: "arrow-size",
        type: "number",
        default: "8",
        description: "Arrow size in pixels"
      },
      {
        name: "autoFlip",
        attr: "auto-flip",
        type: "boolean",
        default: "true",
        description: "Auto-flip when out of viewport"
      },
      {
        name: "autoShift",
        attr: "auto-shift",
        type: "boolean",
        default: "true",
        description: "Auto-shift tooltip to stay in viewport"
      },
      {
        name: "boundary",
        attr: "boundary",
        type: "string",
        default: "''",
        description: "Boundary element selector to constrain tooltip"
      },
      {
        name: "closable",
        attr: "closable",
        type: "boolean",
        default: "false",
        description: "Show close button"
      },
      {
        name: "closeOnClickOutside",
        attr: "close-on-click-outside",
        type: "boolean",
        default: "true",
        description: "Close on click outside"
      },
      {
        name: "content",
        attr: "content",
        type: "string",
        default: "''",
        description: "Tooltip content text"
      },
      {
        name: "customClass",
        attr: "custom-class",
        type: "string",
        default: "''",
        description: "Custom CSS class"
      },
      {
        name: "customColor",
        attr: "custom-color",
        type: "string",
        default: "''",
        description: "Custom background color (overrides variant)"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the tooltip"
      },
      {
        name: "elevation",
        attr: "elevation",
        type: "number",
        default: "0",
        description: "Elevation level (0-5)"
      },
      {
        name: "followCursor",
        attr: "follow-cursor",
        type: "boolean",
        default: "false",
        description: "Follow mouse cursor (only works with hover trigger)"
      },
      {
        name: "groupId",
        attr: "group-id",
        type: "string",
        default: "''",
        description: "Group ID for shared tooltips"
      },
      {
        name: "hideDelay",
        attr: "hide-delay",
        type: "number",
        default: "0",
        description: "Delay before hiding (ms)"
      },
      {
        name: "html",
        attr: "html",
        type: "boolean",
        default: "false",
        description: "Enable HTML content"
      },
      {
        name: "interactive",
        attr: "interactive",
        type: "boolean",
        default: "false",
        description: "Allow tooltip to be interactive (hoverable)"
      },
      {
        name: "keyboard",
        attr: "keyboard",
        type: "boolean",
        default: "true",
        description: "Enable keyboard shortcuts (ESC to close, Tab navigation)"
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "longPressDuration",
        attr: "long-press-duration",
        type: "number",
        default: "500",
        description: "Long press duration for touch devices (ms)"
      },
      {
        name: "maxWidth",
        attr: "max-width",
        type: "number",
        default: "300",
        description: "Maximum width in pixels"
      },
      {
        name: "offset",
        attr: "offset",
        type: "number",
        default: "8",
        description: "Offset from target (px)"
      },
      {
        name: "openAtMousePosition",
        attr: "open-at-mouse-position",
        type: "boolean",
        default: "false",
        description: "Open tooltip at mouse click position (click trigger only)"
      },
      {
        name: "portal",
        attr: "portal",
        type: "boolean",
        default: "true",
        description: "Render tooltip in portal (document.body)"
      },
      {
        name: "position",
        attr: "position",
        type: "\"auto\" | \"bottom\" | \"bottom-left\" | \"bottom-right\" | \"left\" | \"right\" | \"top\" | \"top-left\" | \"top-right\"",
        default: "'top'",
        description: "Tooltip position relative to target",
        options: [
          "auto",
          "bottom",
          "bottom-left",
          "bottom-right",
          "left",
          "right",
          "top",
          "top-left",
          "top-right"
        ]
      },
      {
        name: "shape",
        attr: "shape",
        type: "\"pill\" | \"rounded\" | \"square\"",
        default: "'rounded'",
        description: "Tooltip shape",
        options: [
          "pill",
          "rounded",
          "square"
        ]
      },
      {
        name: "showDelay",
        attr: "show-delay",
        type: "number",
        default: "0",
        description: "Delay before showing (ms)"
      },
      {
        name: "showFooter",
        attr: "show-footer",
        type: "boolean",
        default: "false",
        description: "Show footer slot"
      },
      {
        name: "showGlow",
        attr: "show-glow",
        type: "boolean",
        default: "false",
        description: "Show premium glow effect"
      },
      {
        name: "showHeader",
        attr: "show-header",
        type: "boolean",
        default: "false",
        description: "Show header slot"
      },
      {
        name: "size",
        attr: "size",
        type: "\"default\" | \"large\" | \"lg\" | \"md\" | \"medium\" | \"sm\" | \"small\"",
        default: "'md'",
        description: "Size variant",
        options: [
          "default",
          "large",
          "lg",
          "md",
          "medium",
          "sm",
          "small"
        ]
      },
      {
        name: "sticky",
        attr: "sticky",
        type: "boolean",
        default: "false",
        description: "Sticky tooltip (requires manual close)"
      },
      {
        name: "textColor",
        attr: "text-color",
        type: "string",
        default: "''",
        description: "Custom text color"
      },
      {
        name: "trackInterval",
        attr: "track-interval",
        type: "number",
        default: "16",
        description: "Mouse tracking update interval in ms (for performance)"
      },
      {
        name: "trackMouse",
        attr: "track-mouse",
        type: "boolean",
        default: "false",
        description: "Track mouse movement and update tooltip position"
      },
      {
        name: "transitionDuration",
        attr: "transition-duration",
        type: "number",
        default: "200",
        description: "Transition duration in milliseconds"
      },
      {
        name: "transitionTiming",
        attr: "transition-timing",
        type: "string",
        default: "'ease'",
        description: "Transition timing function"
      },
      {
        name: "trigger",
        attr: "trigger",
        type: "\"click\" | \"focus\" | \"hover\" | \"manual\"",
        default: "'hover'",
        description: "Trigger type for showing tooltip",
        options: [
          "click",
          "focus",
          "hover",
          "manual"
        ]
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"borderless\" | \"danger\" | \"dark\" | \"default\" | \"elevated\" | \"error\" | \"flat\" | \"ghost\" | \"glass\" | \"info\" | \"inverse\" | \"light\" | \"loading\" | \"neutral\" | \"none\" | \"outline\" | \"plain\" | \"primary\" | \"raised\" | \"secondary\" | \"soft\" | \"sovereign\" | \"success\" | \"surface\" | \"tertiary\" | \"warning\"",
        default: "'dark'",
        description: "Visual variant/theme",
        options: [
          "borderless",
          "danger",
          "dark",
          "default",
          "elevated",
          "error",
          "flat",
          "ghost",
          "glass",
          "info",
          "inverse",
          "light",
          "loading",
          "neutral",
          "none",
          "outline",
          "plain",
          "primary",
          "raised",
          "secondary",
          "soft",
          "sovereign",
          "success",
          "surface",
          "tertiary",
          "warning"
        ]
      },
      {
        name: "visible",
        attr: "visible",
        type: "boolean",
        default: "false",
        description: "Show tooltip immediately on load"
      },
      {
        name: "zIndex",
        attr: "z-index",
        type: "number",
        default: "9999",
        description: "z-index value"
      }
    ],
    events: [
      {
        name: "tooltipClick",
        detail: "MouseEvent",
        description: ""
      },
      {
        name: "tooltipClose",
        detail: "void",
        description: ""
      },
      {
        name: "tooltipHide",
        detail: "void",
        description: ""
      },
      {
        name: "tooltipKeydown",
        detail: "KeyboardEvent",
        description: ""
      },
      {
        name: "tooltipMouseEnter",
        detail: "MouseEvent",
        description: ""
      },
      {
        name: "tooltipMouseLeave",
        detail: "MouseEvent",
        description: ""
      },
      {
        name: "tooltipMouseMove",
        detail: "{ x: number; y: number; }",
        description: ""
      },
      {
        name: "tooltipShow",
        detail: "{ position: string; }",
        description: ""
      },
      {
        name: "tooltipTouchEnd",
        detail: "TouchEvent",
        description: ""
      },
      {
        name: "tooltipTouchStart",
        detail: "TouchEvent",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-tooltip allow-nested animation=\"fade-in\" closable></ui-tooltip>",
      stencil: "<ui-tooltip allowNested={true} animation=\"fade-in\" closable={true}></ui-tooltip>",
      react: "export default function Example() {\n  return <ui-tooltip allowNested animation=\"fade-in\" closable></ui-tooltip>;\n}",
      angular: "<ui-tooltip [allowNested]=\"true\" animation=\"fade-in\" [closable]=\"true\"></ui-tooltip>",
      vue: "<template>\n  <UiTooltip :allow-nested=\"true\" animation=\"fade-in\" :closable=\"true\"></UiTooltip>\n</template>"
    }
  },
  {
    id: "top-bar",
    name: "Top Bar",
    tag: "ui-top-bar",
    category: "Navigation",
    description: "Top Bar web component (<ui-top-bar>).",
    totalProps: 12,
    totalEvents: 0,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 300,
    orbitSpeed: 56,
    angleOffset: 317,
    color: "#22d3ee",
    props: [
      {
        name: "actions",
        attr: "actions",
        type: "TopBarAction[] | string",
        default: "'[]'",
        description: "Action icons as JSON string"
      },
      {
        name: "backgroundColor",
        attr: "background-color",
        type: "string",
        default: "'var(--background-color)'",
        description: "Background color"
      },
      {
        name: "companyLogo",
        attr: "company-logo",
        type: "string",
        default: "'🏢'",
        description: "Company logo/icon"
      },
      {
        name: "companyLogoLibrary",
        attr: "company-logo-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'se'",
        description: "Library for the company logo/icon",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "companyName",
        attr: "company-name",
        type: "string",
        default: "'Company Name'",
        description: "Company name"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'default'",
        description: "Default library for actions and menu items",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "showShadow",
        attr: "show-shadow",
        type: "boolean",
        default: "true",
        description: "Show shadow"
      },
      {
        name: "textColor",
        attr: "text-color",
        type: "string",
        default: "'var(--text-color)'",
        description: "Text color"
      },
      {
        name: "userAvatar",
        attr: "user-avatar",
        type: "string",
        default: "'user'",
        description: "User avatar/icon"
      },
      {
        name: "userAvatarLibrary",
        attr: "user-avatar-library",
        type: "\"bootstrap\" | \"default\" | \"fontawesome\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"se\"",
        default: "'se'",
        description: "Library for the user avatar/icon",
        options: [
          "bootstrap",
          "default",
          "fontawesome",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "se"
        ]
      },
      {
        name: "userMenuItems",
        attr: "user-menu-items",
        type: "UserMenuItem[] | string",
        default: "'[]'",
        description: "User menu items as JSON string"
      },
      {
        name: "userName",
        attr: "user-name",
        type: "string",
        default: "'John Doe'",
        description: "User name"
      }
    ],
    events: [],
    slots: [],
    usageCode: {
      html: "<ui-top-bar company-logo-library=\"se\" icon-library=\"default\" user-avatar-library=\"se\"></ui-top-bar>",
      stencil: "<ui-top-bar company-logo-library=\"se\" icon-library=\"default\" user-avatar-library=\"se\"></ui-top-bar>",
      react: "export default function Example() {\n  return <ui-top-bar company-logo-library=\"se\" icon-library=\"default\" user-avatar-library=\"se\"></ui-top-bar>;\n}",
      angular: "<ui-top-bar company-logo-library=\"se\" icon-library=\"default\" user-avatar-library=\"se\"></ui-top-bar>",
      vue: "<template>\n  <UiTopBar company-logo-library=\"se\" icon-library=\"default\" user-avatar-library=\"se\"></UiTopBar>\n</template>"
    }
  },
  {
    id: "transfer-list",
    name: "Transfer List",
    tag: "ui-transfer-list",
    category: "Forms",
    description: "Transfer List web component (<ui-transfer-list>).",
    totalProps: 26,
    totalEvents: 2,
    variantsCount: 2,
    status: "stable",
    orbitRadius: 340,
    orbitSpeed: 62,
    angleOffset: 4,
    color: "#34d399",
    props: [
      {
        name: "allowReorder",
        attr: "allow-reorder",
        type: "boolean",
        default: "false",
        description: "Enable reordering in target list"
      },
      {
        name: "columns",
        type: "{ title: string; dataIndex: string; }[]",
        default: "[]",
        description: "Columns for table mode"
      },
      {
        name: "disabled",
        attr: "disabled",
        type: "boolean",
        default: "false",
        description: "Disabled state"
      },
      {
        name: "enableDrag",
        attr: "enable-drag",
        type: "boolean",
        default: "false",
        description: "Enable drag and drop"
      },
      {
        name: "filterOption",
        type: "(inputValue: string, item: TransferItem) => boolean",
        default: "null",
        description: "Custom filter option function"
      },
      {
        name: "groupBy",
        attr: "group-by",
        type: "string",
        default: "''",
        description: "Property to group items by (e.g., 'category')"
      },
      {
        name: "height",
        attr: "height",
        type: "string",
        default: "'300px'",
        description: "Height of each list"
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "\"bootstrap\" | \"default\" | \"emoji\" | \"fontawesome\" | \"google\" | \"iconoir\" | \"icons8\" | \"ionicons\" | \"lucide\" | \"remixicon\" | \"se\"",
        default: "'default'",
        description: "Default library for icons",
        options: [
          "bootstrap",
          "default",
          "emoji",
          "fontawesome",
          "google",
          "iconoir",
          "icons8",
          "ionicons",
          "lucide",
          "remixicon",
          "se"
        ]
      },
      {
        name: "itemRenderer",
        type: "(item: TransferItem) => string | HTMLElement",
        default: "null",
        description: "Custom item renderer function"
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Layout orientation",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "loading",
        attr: "loading",
        type: "boolean",
        default: "false",
        description: "Loading state"
      },
      {
        name: "locale",
        type: "{ itemUnit?: string; itemsUnit?: string; notFoundContent?: string; searchPlaceholder?: string; titles?: string[]; }",
        default: "{\r\n      itemUnit: 'item',\r\n      itemsUnit: 'items',\r\n      notFoundContent: 'No items',\r\n      searchPlaceholder: 'Search items...',\r\n      titles: ['Available', 'Selected']\r\n    }",
        description: "Locale object for internationalization"
      },
      {
        name: "max",
        attr: "max",
        type: "number",
        default: "Infinity",
        description: "Maximum number of items allowed in target list"
      },
      {
        name: "mode",
        attr: "mode",
        type: "\"list\" | \"table\" | \"tree\"",
        default: "'list'",
        description: "Mode of the transfer list",
        options: [
          "list",
          "table",
          "tree"
        ]
      },
      {
        name: "oneWay",
        attr: "one-way",
        type: "boolean",
        default: "false",
        description: "Enable one-way mode (copy instead of move)"
      },
      {
        name: "pageSize",
        attr: "page-size",
        type: "number",
        default: "10",
        description: ""
      },
      {
        name: "pagination",
        attr: "pagination",
        type: "boolean",
        default: "false",
        description: "Pagination support"
      },
      {
        name: "resizable",
        attr: "resizable",
        type: "boolean",
        default: "false",
        description: "Enable panel resizing (only for horizontal layout)"
      },
      {
        name: "searchPlaceholder",
        attr: "search-placeholder",
        type: "string",
        default: "'Search items...'",
        description: "Placeholder for search input"
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "true",
        description: "Enable search functionality"
      },
      {
        name: "showSelectAll",
        attr: "show-select-all",
        type: "boolean",
        default: "true",
        description: "Show select all checkbox"
      },
      {
        name: "sortable",
        attr: "sortable",
        type: "boolean",
        default: "false",
        description: "Enable sorting functionality"
      },
      {
        name: "sourceItems",
        attr: "source-items",
        type: "TransferItem[] | string",
        default: "[]",
        description: "Source items (left list)"
      },
      {
        name: "targetItems",
        attr: "target-items",
        type: "TransferItem[] | string",
        default: "[]",
        description: "Target items (right list)"
      },
      {
        name: "titles",
        attr: "titles",
        type: "string | string[]",
        default: "['Available', 'Selected']",
        description: "Titles for source and target lists"
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"default\" | \"glass\"",
        default: "'default'",
        description: "Enable glassmorphism variant",
        options: [
          "default",
          "glass"
        ]
      }
    ],
    events: [
      {
        name: "selectionChanged",
        detail: "{ sourceSelected: any[]; targetSelected: any[]; }",
        description: ""
      },
      {
        name: "transferChange",
        detail: "{ source: TransferItem[]; target: TransferItem[]; }",
        description: "Events"
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-transfer-list allow-reorder disabled enable-drag></ui-transfer-list>",
      stencil: "<ui-transfer-list allowReorder={true} disabled={true} enableDrag={true}></ui-transfer-list>",
      react: "export default function Example() {\n  return <ui-transfer-list allowReorder disabled enableDrag></ui-transfer-list>;\n}",
      angular: "<ui-transfer-list [allowReorder]=\"true\" [disabled]=\"true\" [enableDrag]=\"true\"></ui-transfer-list>",
      vue: "<template>\n  <UiTransferList :allow-reorder=\"true\" :disabled=\"true\" :enable-drag=\"true\"></UiTransferList>\n</template>"
    }
  },
  {
    id: "tree",
    name: "Tree",
    tag: "ui-tree",
    category: "Data Display",
    description: "Tree web component (<ui-tree>).",
    totalProps: 39,
    totalEvents: 14,
    variantsCount: 9,
    status: "stable",
    orbitRadius: 380,
    orbitSpeed: 68,
    angleOffset: 51,
    color: "#f472b6",
    props: [
      {
        name: "animated",
        attr: "animated",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "checkboxSync",
        attr: "checkbox-sync",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "checkboxes",
        attr: "checkboxes",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "collapseAll",
        attr: "collapse-all",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "collapsedIcon",
        attr: "collapsed-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "connectorColor",
        attr: "connector-color",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "connectorOpacity",
        attr: "connector-opacity",
        type: "number",
        default: "1",
        description: ""
      },
      {
        name: "connectorShape",
        attr: "connector-shape",
        type: "\"rounded\" | \"square\"",
        default: "'rounded'",
        description: "",
        options: [
          "rounded",
          "square"
        ]
      },
      {
        name: "connectorWidth",
        attr: "connector-width",
        type: "number",
        default: "1",
        description: ""
      },
      {
        name: "contextMenuEnabled",
        attr: "context-menu-enabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "enableDrag",
        attr: "enable-drag",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "expandAll",
        attr: "expand-all",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "expandIconColor",
        attr: "expand-icon-color",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "expandIconSize",
        attr: "expand-icon-size",
        type: "string",
        default: "'14px'",
        description: ""
      },
      {
        name: "expandIconType",
        attr: "expand-icon-type",
        type: "\"arrow\" | \"caret\" | \"chevron\" | \"custom\" | \"plus-minus\"",
        default: "'chevron'",
        description: "",
        options: [
          "arrow",
          "caret",
          "chevron",
          "custom",
          "plus-minus"
        ]
      },
      {
        name: "expandable",
        attr: "expandable",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "expandedIcon",
        attr: "expanded-icon",
        type: "string",
        default: "''",
        description: ""
      },
      {
        name: "iconLibrary",
        attr: "icon-library",
        type: "string",
        default: "'lucide'",
        description: ""
      },
      {
        name: "indent",
        attr: "indent",
        type: "number",
        default: "24",
        description: ""
      },
      {
        name: "inlineEdit",
        attr: "inline-edit",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "layout",
        attr: "layout",
        type: "\"org-chart\" | \"tree\"",
        default: "'tree'",
        description: "",
        options: [
          "org-chart",
          "tree"
        ]
      },
      {
        name: "lazyLoad",
        attr: "lazy-load",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "multiSelect",
        attr: "multi-select",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "nodeHeight",
        attr: "node-height",
        type: "number",
        default: "40",
        description: ""
      },
      {
        name: "nodes",
        attr: "nodes",
        type: "TreeNode[] | string",
        default: "[]",
        description: ""
      },
      {
        name: "orientation",
        attr: "orientation",
        type: "\"horizontal\" | \"vertical\"",
        default: "'vertical'",
        description: "",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "searchable",
        attr: "searchable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "selectable",
        attr: "selectable",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showAvatars",
        attr: "show-avatars",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showGlow",
        attr: "show-glow",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "showIcons",
        attr: "show-icons",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showLines",
        attr: "show-lines",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "showNodeActions",
        attr: "show-node-actions",
        type: "boolean",
        default: "true",
        description: ""
      },
      {
        name: "size",
        attr: "size",
        type: "\"lg\" | \"md\" | \"sm\"",
        default: "'md'",
        description: "",
        options: [
          "lg",
          "md",
          "sm"
        ]
      },
      {
        name: "theme",
        attr: "theme",
        type: "\"dark\" | \"light\"",
        default: "'light'",
        description: "",
        options: [
          "dark",
          "light"
        ]
      },
      {
        name: "undoRedoEnabled",
        attr: "undo-redo-enabled",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "variant",
        attr: "variant",
        type: "\"bordered\" | \"cards\" | \"compact\" | \"default\" | \"directory\" | \"git-graph\" | \"glass\" | \"minimal\" | \"rounded\"",
        default: "'default'",
        description: "",
        options: [
          "bordered",
          "cards",
          "compact",
          "default",
          "directory",
          "git-graph",
          "glass",
          "minimal",
          "rounded"
        ]
      },
      {
        name: "virtualScroll",
        attr: "virtual-scroll",
        type: "boolean",
        default: "false",
        description: ""
      },
      {
        name: "virtualScrollHeight",
        attr: "virtual-scroll-height",
        type: "number",
        default: "400",
        description: ""
      }
    ],
    events: [
      {
        name: "nodeAction",
        detail: "{ node: TreeNode; action: string; }",
        description: ""
      },
      {
        name: "nodeAdd",
        detail: "{ parentId: string | number; node: TreeNode; }",
        description: ""
      },
      {
        name: "nodeCheck",
        detail: "{ node: TreeNode; checked: boolean; indeterminate: boolean; }",
        description: ""
      },
      {
        name: "nodeClick",
        detail: "{ node: TreeNode; path: (string | number)[]; }",
        description: ""
      },
      {
        name: "nodeContextMenu",
        detail: "{ node: TreeNode; x: number; y: number; }",
        description: ""
      },
      {
        name: "nodeDragStart",
        detail: "TreeNode",
        description: ""
      },
      {
        name: "nodeDrop",
        detail: "TreeDropEvent",
        description: ""
      },
      {
        name: "nodeEdit",
        detail: "{ node: TreeNode; newLabel: string; oldLabel: string; }",
        description: ""
      },
      {
        name: "nodeExpand",
        detail: "{ node: TreeNode; expanded: boolean; }",
        description: ""
      },
      {
        name: "nodeLazyLoad",
        detail: "{ node: TreeNode; }",
        description: ""
      },
      {
        name: "nodeMove",
        detail: "{ nodeId: string | number; targetId: string | number; position: \"after\" | \"before\" | \"inside\"; }",
        description: ""
      },
      {
        name: "nodeRemove",
        detail: "{ node: TreeNode; }",
        description: ""
      },
      {
        name: "nodeSelect",
        detail: "{ node: TreeNode; selected: boolean; }",
        description: ""
      },
      {
        name: "treeChange",
        detail: "{ nodes: TreeNode[]; selectedNodes: (string | number)[]; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-tree checkboxes collapse-all connector-shape=\"rounded\"></ui-tree>",
      stencil: "<ui-tree checkboxes={true} collapseAll={true} connector-shape=\"rounded\"></ui-tree>",
      react: "export default function Example() {\n  return <ui-tree checkboxes collapseAll connector-shape=\"rounded\"></ui-tree>;\n}",
      angular: "<ui-tree [checkboxes]=\"true\" [collapseAll]=\"true\" connector-shape=\"rounded\"></ui-tree>",
      vue: "<template>\n  <UiTree :checkboxes=\"true\" :collapse-all=\"true\" connector-shape=\"rounded\"></UiTree>\n</template>"
    }
  },
  {
    id: "workspace-manager",
    name: "Workspace Manager",
    tag: "ui-workspace-manager",
    category: "Layout",
    description: "Workspace Manager web component (<ui-workspace-manager>).",
    totalProps: 4,
    totalEvents: 10,
    variantsCount: 0,
    status: "stable",
    orbitRadius: 420,
    orbitSpeed: 74,
    angleOffset: 98,
    color: "#fbbf24",
    props: [
      {
        name: "direction",
        attr: "direction",
        type: "\"horizontal\" | \"vertical\"",
        default: "'horizontal'",
        description: "Horizontal or vertical split for top-level regions",
        options: [
          "horizontal",
          "vertical"
        ]
      },
      {
        name: "regions",
        attr: "regions",
        type: "LayoutRegionConfig[] | string",
        default: "[]",
        description: "Initial regions configuration"
      },
      {
        name: "saveState",
        attr: "save-state",
        type: "boolean",
        default: "true",
        description: "Persist sizes between reloads"
      },
      {
        name: "stateKey",
        attr: "state-key",
        type: "string",
        default: "'layout-manager-state'",
        description: "LocalStorage key when saveState=true"
      }
    ],
    events: [
      {
        name: "layoutChange",
        detail: "{ regions: RegionState[]; }",
        description: ""
      },
      {
        name: "panelAdded",
        detail: "PanelState",
        description: ""
      },
      {
        name: "panelDocked",
        detail: "{ panelId: string; regionId: string; }",
        description: ""
      },
      {
        name: "panelMaximized",
        detail: "{ panelId: string; }",
        description: ""
      },
      {
        name: "panelMoved",
        detail: "{ panelId: string; from: string; to: string; }",
        description: ""
      },
      {
        name: "panelPoppedOut",
        detail: "{ panelId: string; }",
        description: ""
      },
      {
        name: "panelRemoved",
        detail: "{ panelId: string; regionId: string; }",
        description: ""
      },
      {
        name: "panelRestored",
        detail: "{ panelId: string; }",
        description: ""
      },
      {
        name: "regionAdded",
        detail: "{ regionId: string; title: string; }",
        description: ""
      },
      {
        name: "regionRemoved",
        detail: "{ regionId: string; }",
        description: ""
      }
    ],
    slots: [],
    usageCode: {
      html: "<ui-workspace-manager direction=\"horizontal\"></ui-workspace-manager>",
      stencil: "<ui-workspace-manager direction=\"horizontal\"></ui-workspace-manager>",
      react: "export default function Example() {\n  return <ui-workspace-manager direction=\"horizontal\"></ui-workspace-manager>;\n}",
      angular: "<ui-workspace-manager direction=\"horizontal\"></ui-workspace-manager>",
      vue: "<template>\n  <UiWorkspaceManager direction=\"horizontal\"></UiWorkspaceManager>\n</template>"
    }
  }
];

export const CATEGORIES: ComponentCategory[] = [
  'Forms',
  'Navigation',
  'Data Display',
  'Feedback',
  'Layout',
  'Utility'
];
