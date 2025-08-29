import { Table } from 'rsuite';
import { IoIosEye } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaPen } from 'react-icons/fa';
import DeleteModalComponent from '../components/deleteModal';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { RowDataType } from 'rsuite/esm/Table';
const { Column, HeaderCell, Cell } = Table;

const columns = [
  { key: 'date', label: 'تاریخ رسیدگی', width: 150, fixed: true },
  { key: 'time', label: 'ساعت رسیدگی', width: 130, fixed: true },
  { key: 'proceedingNumber', label: 'شماره برونده دادرسی', width: 180, fixed: true },
  { key: 'clientFullName', label: 'نام موکل', width: 130, fixed: true },
  { key: 'display', label: 'نمایش', width: 130, fixed: true },
  { key: 'edit', label: 'ویرایش', width: 130, fixed: true },
  { key: 'remove', label: 'حذف', width: 130, fixed: true },
];

const data = [
  { id: 1, date: '1404/10/5', clientFullName: 'علی علیزاده',proceedingNumber:"123456789123456789", time:"20:45" },
  { id: 2, date: '1404/10/6', clientFullName: 'فاطمه حسینی' ,proceedingNumber:"123456789123456789", time:"20:45" },
  { id: 3, date: '1404/10/7', clientFullName: 'رضا محمدی' ,proceedingNumber:"123456789123456789", time:"20:45"},
];

// Compact cell with smaller padding
const CompactCell = (props) => <Cell {...props} style={{ padding: '6px' }} />;

const TimeTable = () => {
  const [isDeleteModalOpen,setDeleteIsModalOpen]=useState(false)
  const [isEditModalOpen,setEditIsModalOpen]=useState(false)
   const navigate=useNavigate()
  return (
    <div className="py-9 px-8">
      {/* 👇 This wrapper enables horizontal scroll on mobile */}
      <div className="overflow-x-auto  " style={{ direction: 'rtl' }}>
        <Table
          height={400}
          data={data}
          bordered
          cellBordered
          rowHeight={34}
          className="rounded-lg border-2 border-blue-500 min-w-max"
          // 👆 min-w-max prevents shrinking, ensures full width
        >
          {columns.map((column,index) => {
            const { key, label, ...rest } = column;
            return (
              <Column {...rest} key={key} fullText>
                <HeaderCell>{label}</HeaderCell>
                <CompactCell dataKey={key} >
                  {(rowData:RowDataType) => {
                  
                    if (key === 'display') {
                      return (
                        <IoIosEye
                          className="cursor-pointer w-full text-center text-blue-600 hover:text-blue-800"
                        onClick={()=>navigate(`/docs/${rowData.id}`)}
                          size={18}
                        />
                      );
                    }
                    if (key === 'edit') {
                      return (
                        <FaPen
                          className="cursor-pointer w-full text-center text-gray-600 hover:text-gray-800"
                          onClick={() => console.log('Edit:', rowData)}
                          size={16}
                        />
                      );
                    }
                    if (key === 'remove') {
                      return (
                        <RiDeleteBin5Fill
                          className="cursor-pointer w-full text-center text-red-600 hover:text-red-800"
                          onClick={() => setDeleteIsModalOpen(true) }
                          size={18}
                          
                        />
                      );
                    }
                    return rowData[key];
                  }}
                </CompactCell>
              </Column>
            );
          })}
        </Table>
      </div>
    {isDeleteModalOpen && <DeleteModalComponent modalIsOpen={isDeleteModalOpen} handleClose={()=>setDeleteIsModalOpen(false)} handleOpen={()=>setDeleteIsModalOpen(true)}/>  }  
    {/* {isEditModalOpen && <ModalComponent modalIsOpen={isEditModalOpen} handleClose={()=>setEditIsModalOpen(false)} handleOpen={()=>setEditIsModalOpen(true)}/>  }   */}

    </div>
  );
};

export default TimeTable;