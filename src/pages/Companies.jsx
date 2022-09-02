import React from "react";
import { HiSearch } from "react-icons/hi";
import PageHeader from "../components/PageHeader/PageHeader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import DataTable from "../components/DataTable/DataTable";
import { comapnyTableColumns } from "../constants/tableColumns";

//dummy data imports
import { companyTableData } from "../dummyData";

const Companies = () => {
  return (
    <div className="p-6">
      <PageHeader title="Companies" />
      <div className="bg-white p-6 rounded-xl shadow-sm mt-5">
        <div className="flex flex-col gap-2 items-center justify-between lg:flex-row">
          <div className="bg-[#FAFAFB] w-full flex items-center border-[1px] border-[#e6ebf1] rounded-lg py-2 px-2 lg:w-[300px]">
            <HiSearch color="#A5B0BF" />
            <input
              type="text"
              className="bg-transparent pl-2 outline-none font-medium text-base"
            />
          </div>
          <button className="flex w-full items-center justify-center gap-1 bg-[#3E79F7] text-white px-5 py-3 rounded-md hover:opacity-70 duration-500 lg:w-auto">
            <span>
              <AiOutlinePlusCircle />
            </span>{" "}
            Add Company
          </button>
        </div>
        <div className="mt-5 overflow-x-auto">
          <DataTable columns={comapnyTableColumns} data={companyTableData} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
