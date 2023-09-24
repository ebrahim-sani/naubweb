import Link from "next/link";

type BtnProps = {
   btnType?: any;
   title: string;
   handleClick?: any;
   styles?: string;
   icon?: any;
   href?: string;
};
const CustomButton = ({
   btnType,
   title,
   handleClick,
   styles,
   icon,
   href,
}: BtnProps) => {
   return (
      <Link href={`${href}`}>
         <button
            type={btnType}
            onClick={handleClick}
            className={`${styles} font-epilogue font-semibold text-sm leading-[26px] btn border rounded-3xl text-gray-200`}
         >
            <div className="flex items-center gap-2">
               {title} {icon}
            </div>
         </button>
      </Link>
   );
};

export default CustomButton;
