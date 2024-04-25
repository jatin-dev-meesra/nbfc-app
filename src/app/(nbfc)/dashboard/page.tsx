import Calculator from "@/components/calculator/calculator";
import DataCard from "@/components/cards/datacard";
import OverviewDownload from "@/components/test/overview";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        {/* Filter Buttons */}
        <div className="flex gap-3 py-5 px-1">
          <button className="cursor-pointer py-2 px-4 bg-white rounded-3xs border-2 border-solid rounded-md">
            <div className="capitalize font-semibold min-w-8">date</div>
          </button>
          <button className="cursor-pointer py-2 px-4 bg-white rounded-3xs border-2 border-solid rounded-md">
            <div className="capitalize font-semibold min-w-8">week</div>
          </button>
          <button className="cursor-pointer py-2 px-4 bg-white rounded-3xs border-2 border-solid rounded-md">
            <div className="capitalize font-semibold min-w-8">month</div>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full h-fit md:w-4/6 flex flex-wrap">
            <div className="p-1 w-1/2 md:w-1/3 ">
              <DataCard
                icon="bi-file-earmark-bar-graph"
                value="29k"
                name="Total Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-file-earmark-bar-graph"
                value="29k"
                name="Total Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-file-earmark-bar-graph"
                value="29k"
                name="Total Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-file-earmark-bar-graph"
                value="29k"
                name="Total Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-file-earmark-bar-graph"
                value="29k"
                name="Total Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-file-earmark-bar-graph"
                value="29k"
                name="Total Policies"
              />
            </div>
          </div>
          <div className="w-full md:w-2/6">
            <div className="py-1">
              <div className="bg-white">
                <Calculator />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="flex-1 flex flex-col items-start justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_289px)] text-left text-[1.5rem] text-black font-inter mq1025:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.518rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq1125:flex-wrap">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.312rem] pl-[0rem] box-border gap-[1.237rem_1.118rem] min-w-[39.438rem] max-w-full mq750:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.237rem] min-w-[8.125rem]">
                  <OverviewDownload
                    fileEarmarkArrowUp12="/fileearmarkarrowup-1-2.svg"
                    totalDownloads="Total Policies"
                  />
                  <OverviewDownload
                    fileEarmarkArrowUp12="/fileearmarkarrowup-1-1.svg"
                    totalDownloads="Issued Policies"
                    propPadding="1.937rem 7rem 2rem 2.081rem"
                    propAlignSelf="stretch"
                    propPadding1="0rem 0rem 0rem"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.237rem] min-w-[8.125rem]">
                  <OverviewDownload
                    fileEarmarkArrowUp12="/fileearmarkarrowup-1-2-1.svg"
                    totalDownloads="Premium Payments"
                    propPadding="1.937rem 3.812rem 2rem 2.075rem"
                    propAlignSelf="stretch"
                    propPadding1="unset"
                  />
                  <OverviewDownload
                    fileEarmarkArrowUp12="/fileearmarkarrowup-1-2-2.svg"
                    totalDownloads="Pending Payments "
                    propPadding="1.937rem 4.25rem 2rem 2.075rem"
                    propAlignSelf="stretch"
                    propPadding1="0rem 0rem 0rem"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.237rem] min-w-[8.125rem]">
                  <OverviewDownload
                    fileEarmarkArrowUp12="/fileearmarkarrowup-1-2-3.svg"
                    totalDownloads="Total Claims "
                    propPadding="1.937rem 8.812rem 2rem 2.081rem"
                    propAlignSelf="unset"
                    propPadding1="unset"
                  />
                  <OverviewDownload
                    fileEarmarkArrowUp12="/fileearmarkarrowup-1-2-4.svg"
                    totalDownloads="Total Under Writing"
                    propPadding="1.937rem 4.125rem 2rem 2.081rem"
                    propAlignSelf="stretch"
                    propPadding1="0rem 0rem 0rem"
                  />
                </div>
              </div>
              <form className="m-0 w-[24.25rem] rounded-3xs bg-white-main box-border flex flex-col items-end justify-start py-[1.375rem] px-[0.062rem] gap-[1.5rem] min-w-[24.25rem] max-w-full border-[1.4px] border-solid border-fill-in mq450:min-w-full mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border mq1125:flex-1">
                <div className="rounded-[12.73px] flex flex-row items-start justify-start py-[0.637rem] px-[1.275rem] gap-[1.206rem] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.168rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.913rem] h-[1.913rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/calculator-1.svg"
                    />
                  </div>
                  <div className="h-[2.25rem] relative text-[1.913rem] capitalize font-medium font-header-22 text-body-text-color text-left inline-block mq450:text-[1.125rem] mq1025:text-[1.5rem]">
                    Premium Calculator
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.393rem] pl-[1.375rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.281rem] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem]">
                      <div className="w-[16.5rem] relative text-[1rem] capitalize font-header-22 text-text-color whitespace-pre-wrap text-left inline-block">
                        {" "}
                        Loan Tenure*
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0.875rem] mq450:flex-wrap">
                        <div className="flex-1 rounded-8xs bg-white-main box-border flex flex-row items-center justify-start py-[0.5rem] pr-[0.5rem] pl-[0.625rem] gap-[0.625rem] min-w-[6.563rem] border-[1px] border-solid border-fill-in">
                          <div className="flex-1 relative text-[1rem] capitalize font-header-22 text-fill-in text-left">
                            Year
                          </div>
                          <img
                            className="h-[0.463rem] w-[0.75rem] relative"
                            alt=""
                            src="/coolicon.svg"
                          />
                        </div>
                        <div className="flex-1 rounded-8xs bg-white-main box-border flex flex-row items-center justify-start py-[0.5rem] pr-[0.5rem] pl-[0.625rem] gap-[0.625rem] min-w-[6.563rem] border-[1px] border-solid border-fill-in">
                          <div className="flex-1 relative text-[1rem] capitalize font-header-22 text-fill-in text-left">
                            Month
                          </div>
                          <img
                            className="h-[0.463rem] w-[0.75rem] relative"
                            alt=""
                            src="/coolicon.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[3.125rem] relative">
                      <div className="absolute top-[0.688rem] left-[0rem] rounded-8xs bg-white-main box-border w-[21.188rem] flex flex-row items-start justify-start py-[0.5rem] px-[0.562rem] border-[1px] border-solid border-fill-in">
                        <input
                          className="w-full [border:none] [outline:none] font-header-22 text-[1rem] bg-[transparent] h-[1.188rem] flex-1 relative capitalize text-fill-in text-left inline-block min-w-[11.938rem] p-0"
                          placeholder="Enter your Loan Amount"
                          type="text"
                        />
                      </div>
                      <div className="absolute top-[0rem] left-[0.5rem] bg-white-main flex flex-row items-start justify-start whitespace-nowrap z-[1]">
                        <div className="relative text-[1rem] capitalize font-header-22 text-text-color text-left inline-block min-w-[6.688rem]">
                          Loan Amount*
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] mq450:flex-wrap">
                      <div className="h-[3.188rem] flex-1 relative min-w-[6.438rem]">
                        <div className="absolute top-[0.75rem] left-[0rem] rounded-8xs bg-white-main box-border w-[9.969rem] flex flex-row items-start justify-start py-[0.5rem] px-[0.562rem] border-[1px] border-solid border-fill-in">
                          <input
                            className="w-full [border:none] [outline:none] font-header-22 text-[1rem] bg-[transparent] h-[1.188rem] flex-1 relative capitalize text-fill-in text-left inline-block min-w-[5.25rem] p-0"
                            placeholder="DD-MM-YYY"
                            type="text"
                          />
                        </div>
                        <div className="absolute top-[0rem] left-[0.625rem] bg-white-main w-[2.5rem] h-[1.188rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border z-[1]">
                          <div className="w-[3.5rem] absolute !m-[0] top-[0rem] left-[0rem] text-[1rem] capitalize font-header-22 text-text-color text-left inline-block shrink-0 [debug_commit:1de1738]">
                            DOB*
                          </div>
                        </div>
                      </div>
                      <div className="h-[3.188rem] flex-1 relative min-w-[6.438rem]">
                        <div className="absolute top-[0.75rem] left-[0rem] rounded-8xs bg-white-main box-border w-[9.969rem] flex flex-row items-start justify-start py-[0.5rem] px-[0.562rem] border-[1px] border-solid border-fill-in">
                          <input
                            className="w-full [border:none] [outline:none] font-header-22 text-[1rem] bg-[transparent] h-[1.188rem] flex-1 relative capitalize text-fill-in text-left inline-block min-w-[5.25rem] p-0"
                            placeholder="XX"
                            type="text"
                          />
                        </div>
                        <div className="absolute top-[0rem] left-[0.656rem] bg-white-main w-[1.938rem] h-[1.188rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.025rem] pr-[0rem] pl-[0.031rem] box-border z-[1]">
                          <div className="absolute !m-[0] top-[-0.025rem] left-[0.031rem] text-[1rem] capitalize font-header-22 text-text-color text-left inline-block min-w-[2.188rem] shrink-0 [debug_commit:1de1738] h-full">
                            AGE
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[16.875rem] h-[2.188rem] rounded-3xs bg-primary-color hidden flex-row items-center justify-center py-[0.5rem] px-[1rem] box-border gap-[0.5rem]">
                  <div className="h-[1.625rem] flex flex-row items-center justify-start gap-[0.5rem]">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/iconorders1.svg"
                    />
                    <div className="self-stretch relative text-[1.375rem] capitalize font-header-22 text-background-1 text-left mq450:text-[1.125rem]">
                      Calculate Now
                    </div>
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative object-contain hidden"
                    alt=""
                    src="/icon16pxdropdown1@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.768rem] pl-[0.75rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.062rem] pl-[0rem] box-border gap-[1.25rem] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[7.25rem]">
                        <button className="cursor-pointer [border:none] pt-[1rem] px-[1rem] pb-[0.875rem] bg-[transparent] self-stretch flex flex-row items-start justify-start border-b-[1px] border-solid border-aliceblue hover:bg-lightgray">
                          <div className="relative text-[1rem] capitalize font-header-22 text-tertiary-dark text-left">{`Premium Amount `}</div>
                        </button>
                        <div className="self-stretch flex flex-row items-start justify-start pt-[1rem] px-[1rem] pb-[0.875rem] border-b-[1px] border-solid border-aliceblue">
                          <div className="relative text-[1rem] capitalize font-header-22 text-tertiary-dark text-left inline-block min-w-[4.563rem]">
                            GST (18%)
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] pt-[0.875rem] px-[1rem] pb-[1rem] bg-[transparent] self-stretch flex flex-row items-start justify-start border-t-[1px] border-dashed border-black2 hover:bg-darkslategray">
                          <div className="relative text-[1.375rem] capitalize font-medium font-header-22 text-tertiary-dark text-left mq450:text-[1.125rem]">
                            Total Amount
                          </div>
                        </button>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[7.25rem]">
                        <div className="self-stretch flex flex-row items-start justify-end pt-[1rem] px-[1rem] pb-[0.875rem] border-b-[1px] border-solid border-aliceblue">
                          <div className="relative text-[1rem] capitalize font-header-22 text-tertiary-dark text-left inline-block min-w-[3.938rem] whitespace-nowrap">
                            ₹20,000
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-[1rem] px-[1rem] pb-[0.875rem] border-b-[1px] border-solid border-aliceblue">
                          <div className="relative text-[1rem] capitalize font-header-22 text-tertiary-dark text-left inline-block min-w-[3.313rem] whitespace-nowrap">
                            ₹3,600
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-[0.875rem] px-[1rem] pb-[1rem] border-t-[1px] border-dashed border-black2">
                          <div className="relative text-[1.375rem] capitalize font-medium font-header-22 text-tertiary-dark text-left inline-block min-w-[5.563rem] whitespace-nowrap mq450:text-[1.125rem]">
                            ₹23,600
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.625rem] box-border max-w-full">
                      <div className="flex flex-row items-start justify-center gap-[1rem] max-w-full mq450:flex-wrap">
                        <button className="cursor-pointer [border:none] py-[0.5rem] pr-[1.456rem] pl-[1.45rem] bg-background-1 rounded-3xs flex flex-row items-center justify-center gap-[0.5rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                            <img
                              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 hidden min-h-[1.5rem]"
                              alt=""
                              src="/iconorders1.svg"
                            />
                            <div className="relative text-[1.25rem] capitalize font-header-22 text-sub-text text-left inline-block min-w-[7.188rem] mq450:text-[1rem]">
                              Re-evaluate
                            </div>
                          </div>
                          <img
                            className="h-[1rem] w-[1rem] relative object-contain hidden"
                            alt=""
                            src="/icon16pxdropdown2@2x.png"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-[0.5rem] pr-[2.55rem] pl-[2.543rem] bg-primary-color rounded-3xs flex flex-row items-center justify-center gap-[0.5rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                            <img
                              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 hidden min-h-[1.5rem]"
                              alt=""
                              src="/iconorders1.svg"
                            />
                            <div className="relative text-[1.25rem] capitalize font-header-22 text-background-1 text-left inline-block min-w-[5rem] mq450:text-[1rem]">
                              Fill Form
                            </div>
                          </div>
                          <img
                            className="h-[1rem] w-[1rem] relative object-contain hidden"
                            alt=""
                            src="/icon16pxdropdown2@2x.png"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-white-main box-border flex flex-col items-start justify-start pt-[0rem] pb-[0.625rem] pr-[0.437rem] pl-[0rem] gap-[0.5rem] max-w-full border-[1.4px] border-solid border-fill-in">
            <div className="self-stretch flex flex-col items-center justify-center max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start py-[1.5rem] pr-[1.25rem] pl-[2rem]">
                <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-[1.188rem]">
                  Explore Contests
                </h3>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between py-[0rem] px-[0.687rem] box-border gap-[0.562rem] max-w-full">
                <div className="h-[26.625rem] w-[27.813rem] rounded-lg bg-white-main box-border flex flex-col items-start justify-start py-[1.5rem] px-[1.437rem] max-w-full border-[1px] border-solid border-grey-100 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/frame-1597883443@2x.png"
                  />
                </div>
                <div className="h-[26.625rem] w-[27.688rem] rounded-lg bg-white-main box-border flex flex-col items-start justify-start py-[1.5rem] px-[1.437rem] max-w-full border-[1px] border-solid border-grey-100 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/frame-1597883442@2x.png"
                  />
                </div>
                <div className="h-[26.625rem] w-[27.688rem] rounded-lg bg-white-main box-border flex flex-col items-start justify-start py-[1.5rem] px-[1.437rem] max-w-full border-[1px] border-solid border-grey-100 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/frame-1597883443-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[81.375rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                <div className="h-[1rem] w-[1rem] relative rounded-[50%] bg-gainsboro-200" />
                <div className="h-[1rem] w-[1rem] relative rounded-[50%] bg-primary-color" />
                <div className="h-[1rem] w-[1rem] relative rounded-[50%] bg-gainsboro-200" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default page;
