import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type OverviewDownloadType = {
  fileEarmarkArrowUp12?: string;
  k?: string;
  totalDownloads?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const OverviewDownload: NextPage<OverviewDownloadType> = ({
  fileEarmarkArrowUp12,
  k,
  totalDownloads,
  propFlex,
  propDisplay,
  propMinWidth,
}) => {
  const overviewDownloadStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const kStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className="flex-[0.7204] rounded-[13.43px] bg-white-main box-border flex flex-col items-start justify-start pt-[25px] pb-[23px] pr-[260px] pl-[26.9px] gap-[9px] min-w-[325px] max-w-full text-left text-5xl text-header-text-color font-text-22-size border-[1.1px] border-solid border-silver-100 mq450:pr-5 mq450:box-border mq450:flex-1"
      style={overviewDownloadStyle}
    >
      {/* <img
        className="w-[26.9px] h-[26.9px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={fileEarmarkArrowUp12}
      /> */}
      <i className="bi bi-currency-dollar"></i>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[4.5px]">
        <div
          className="relative tracking-[0.56px] leading-[34px] font-medium mq450:text-lgi mq450:leading-[27px]"
          style={kStyle}
        >
          {k}
        </div>
        <div className="relative text-xl tracking-[0.56px] leading-[150%] text-sub-text mq450:text-base mq450:leading-[24px]">
          {totalDownloads}
        </div>
      </div>
    </div>
  );
};

export default OverviewDownload;
