interface StyledButtonProps {
  aria?: string;
  rel?: string;
  text: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
export default function GradientButton(props: StyledButtonProps) {
  const primaryButton = "bg-blue-700 text-white disabled:bg-slate-600";
  const secondaryButton = "border-2 text-blue-700 border-secondaryColor";
  const tertiaryButton =
    "underline underline-offset-4 decoration-secondaryColor text-blue-700 hover:no-underline";
  const styling = props.primary
    ? primaryButton
    : props.secondary
    ? secondaryButton
    : tertiaryButton;
  // *************** Download **************
  return (
    <button
      className={`inline-block px-4 py-2 m-1 rounded-2xl  ${styling}   hover:bg-blue-900  animated-gradient text-center`}
      aria-label={props.aria}
      rel={props.rel || ""}
      role="button"
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
