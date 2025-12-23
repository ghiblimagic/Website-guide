interface StyledButtonProps {
  aria?: string;
  rel?: string;
  text?: string;
  styling?: string;
  primary?: boolean;
  secondary?: boolean;
  children?: React.ReactElement;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
export default function GradientButton(props: StyledButtonProps) {
  const primaryButton =
    "bg-blue-600 text-white disabled:bg-slate-600  border-b-2 mr-2  border-white  hover:bg-blue-700 shadow-md shadow-blue-950";
  const secondaryButton =
    "border-2 text-blue-900 font-semibold border-blue-700 bg-blue-100 hover:bg-blue-200";
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
      className={`inline-block px-4 py-2 m-1 rounded-2xl     animated-gradient text-center ${styling} `}
      aria-label={props.aria}
      rel={props.rel || ""}
      role="button"
      type="button"
      title={props.title}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <div className="flex text-center ">
        {props.children && (
          <span className="flex items-center">{props.children}</span>
        )}
        {props.text}
      </div>
    </button>
  );
}
