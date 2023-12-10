import { useEffect, useRef, useState } from "react";
// import "./index.css";

export interface ICollapsibleProps {
  open?: boolean;
  header: string | React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  iconButtonClassName?: string;
  contentClassName?: string;
  contentContainerClassName?: string;
  iconUp?: React.ReactNode;
  iconDown?: React.ReactNode;
  collapsibleClassName?: string;
  children?: React.ReactNode;
}

const Collapsible: React.FC<ICollapsibleProps> = ({
  open,
  collapsibleClassName = "border-[1px] border-[#E4E4E7] rounded-xl mb-3 hover:cursor-pointer mt-5 border border-gray-200",
  headerClassName = "flex flex-row items-center justify-between px-4 py-4",
  titleClassName = "font-bold text-lg text-[#2E2E2E] hover:text-blue-600",
  iconButtonClassName = "",
  contentClassName = "",
  contentContainerClassName = "",
  iconUp: IconUp,
  iconDown: IconDown,
  children,
  header,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);
  const ref = useRef<HTMLDivElement>(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);
  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);
  return (
    <>
      <div className={collapsibleClassName}>
        <div>
          <div onClick={handleFilterOpening} className={headerClassName}>
            <div className={titleClassName}>{header}</div>
            <button type="button" className="collapsible-icon-button-edonec">
              {IconDown && IconUp ? isOpen ? IconDown : IconUp : <i className={`fas-edonec fa-chevron-down-edonec ${isOpen ? "rotate-center-edonec down" : "rotate-center-edonec up"}`} />}
            </button>
          </div>
        </div>
        <div className={`collapsible-content-edonec ${contentClassName}`} style={{ height }}>
          <div className="h-[2px] mx-4 mb-2 bg-blue-400"></div>
          <div ref={ref}>
            <div className={`collapsible-content-padding-edonec ${contentContainerClassName}`}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
