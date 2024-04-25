import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type OverviewDownloadType = {
  fileEarmarkArrowUp12?: string;
  totalDownloads?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
};

const OverviewDownload: NextPage<OverviewDownloadType> = ({
  fileEarmarkArrowUp12,
  totalDownloads,
  propPadding,
  propAlignSelf,
  propPadding1,
}) => {
  const overviewDownloadStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const overviewDownloadDetailStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding1,
    };
  }, [propAlignSelf, propPadding1]);

  return (
    <div
      className="self-stretch rounded-[16.63px] bg-white-main flex flex-col items-start justify-start pt-[1.937rem] pb-[2rem] pr-[8.125rem] pl-[2.081rem] gap-[0.693rem] text-left text-[1.906rem] text-header-text-color font-header-22 border-[1.4px] border-solid border-silver-100 mq450:pr-[1.25rem] mq450:box-border"
      style={overviewDownloadStyle}
    >
      <img
        className="w-[2.081rem] h-[2.081rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={fileEarmarkArrowUp12}
      />
      <div
        className="flex flex-col items-start justify-start gap-[0.343rem]"
        style={overviewDownloadDetailStyle}
      >
        <div className="relative tracking-[0.69px] leading-[2.688rem] font-medium inline-block min-w-[3.563rem] mq450:text-[1.125rem] mq450:leading-[1.625rem] mq1025:text-[1.5rem] mq1025:leading-[2.125rem]">
          29k
        </div>
        <div className="relative text-[1.388rem] tracking-[0.69px] leading-[150%] text-sub-text mq450:text-[1.125rem] mq450:leading-[1.688rem]">
          {totalDownloads}
        </div>
      </div>
    </div>
  );
};

export default OverviewDownload;
