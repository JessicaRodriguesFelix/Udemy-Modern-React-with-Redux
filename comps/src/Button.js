import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
  // Generate a dynamic set of Tailwind CSS classes based on the provided variations.
  // Common base classes include padding and border styles. The classes for specific
  // variations (primary, secondary, success, warning, danger) are conditionally added
  const classes = twMerge(
        className("px-3 py-1.5 border", {
        "border-blue-600 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-400 bg-yellow-400 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
    })
  );

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
          Number(!!primary) +
          Number(!!secondary) +
          Number(!!success) +
          Number(!!warning) +
          Number(!!danger)

        if (count > 1) {
            return new Error(
              "Only one of primary, secondary, success, warning, danger can be true."
            );
        }
    }
}
export default Button;