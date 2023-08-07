import {
  defineComponent,
  h,
  type PropType,
  type VNode,
  type VNodeArrayChildren,
} from "vue";

type RichTextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "blockquote"
  | "ul"
  | "ol"
  | "link"
  | "relationship"
  | "upload"
  | "indent";

type RichTextLeaf = "bold" | "italic" | "underline" | "strikethrough" | "code";

interface RichTextNode extends Partial<Record<RichTextLeaf, boolean>> {
  type?: RichTextElement;
  children?: RichTextChildren;
  text?: string;
  linkType?: "custom" | "relationship";
  url?: string;
  newTab?: boolean;
  [x: string]: any;
}

export type RichTextChildren = RichTextNode[];

type RawChildren =
  | string
  | number
  | boolean
  | VNode
  | VNodeArrayChildren
  | (() => any);

function _serialize(children?: RichTextChildren): RawChildren[] | null {
  if (!children) return null;

  return children.filter(Boolean).map((node, i) => {
    if (node.text != undefined) {
      let textNode: RawChildren = node.text;

      if (node.bold) textNode = h("strong", null, textNode);
      if (node.italic) textNode = h("em", null, textNode);
      if (node.underline)
        textNode = h("span", { class: "underline" }, textNode);
      if (node.strikethrough)
        textNode = h("span", { class: "line-through" }, textNode);
      if (node.code) textNode = h("code", null, textNode);

      return textNode;
    }

    const serializedChildren = _serialize(node.children);
    if (!serializedChildren) return h("p", null, "No children detected");

    if (!node.type) return h("p", { key: i }, ...serializedChildren);

    if (
      [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ul",
        "ol",
        "li",
        "blockquote",
      ].includes(node.type)
    )
      return h(node.type, { key: i }, ...serializedChildren);

    if (node.type === "link") {
      const attrs: any = { key: i, href: node.url };
      node.newTab && (attrs.target = "_blank");
      return h("a", attrs, ...serializedChildren);
    }

    // TODO: Support relationships
    // TODO: Support uploads

    return h("p", { key: i }, ...serializedChildren);
  });
}

export default defineComponent({
  props: {
    content: { type: Array as PropType<RichTextChildren>, required: true },
    as: String,
  },

  setup({ content, as }, { attrs }) {
    const children = _serialize(content);
    if (!children) return h("div", { ...attrs }, "No rich text provided");
    return () => h(as || "div", { ...attrs }, ...children);
  },
});
