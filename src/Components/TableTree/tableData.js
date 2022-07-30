import open from './table_open.svg'
import close from './table_close.svg'

const getTableColumn = (title, accessor, align, width, sticky) => (
  {
    Header: title,
    accessor,
    align,
    width,
    // sticky: sticky ? sticky : ''
    // isAllRowsExpanded: true,
    // isExpanded: true,
  }
)

const getTableColumns = (ref, intl) => {
  let columns = []
  columns = [
    {
      // Build our expander column
      id: 'expander', // Make sure it has an ID
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
        <span {...getToggleAllRowsExpandedProps()}>
          {/* {isAllRowsExpanded ? '👇' : '👉'} */}
          &nbsp;
        </span>
      ),
      Cell: ({ row }) => {
        // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
        // to build the toggle for expanding a row
        // console.log('row==', row)
        const openImg = (
          <div style={{ display: 'flex',  }}>
            <img src={close} alt="Open" />
            <div style={{ maxWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.original.productType}</div>
            {/* <span>{row.original.productModel}</span> */}
          </div>
        )
        const closeImg = (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={close} alt="Open" />
            <div style={{ maxWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.original.productType}</div>
            {/* <span>{row.original.productModel}</span> */}
          </div>
        )
        return (row.canExpand ? (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                // We can even use the row.depth property
                // and paddingLeft to indicate the depth
                // of the row
                paddingLeft: `${row.depth * 2}rem`,
              },
            })}
          >
            {row.isExpanded ?  closeImg : openImg}
          </span>
        ) : null
        )
      },
      isExpanded: true,
      sticky: 'left',
      width: 100,
    },
    getTableColumn('Slot', 'slotNumber', 'left', 100, 'left'),
    getTableColumn('Form', 'form', 'left', 100, 'left'),
    getTableColumn('Bus Type', 'busType', 'left', 100, 'left'),
    getTableColumn('Drive Type', 'driveType', 'left', 100),
    getTableColumn('Drive Status', 'driveState', 'left', 100),
    getTableColumn('Threshold', 'threshould', 'left', 100),
    getTableColumn('Manufacture', 'manufacture', 'left', 100),
    getTableColumn('Model', 'model', 'left', 100),
    getTableColumn('Drive Serial Id', 'driveSerialId', 'left', 100),
    getTableColumn('Drive Capacity', 'diskCapacity', 'left', 70, "right"),
  ]
  return columns
}

export default getTableColumns

let drivePrediction = [
  {
    "chassis_image": "TS-451A", "chassis_imgs_path": "/cgi-bin/apps/storageManagerV2/images/ChassisViewSVG",
    "drives": [
      { "daDriveState": "PROCESSING", "driveId": 20, "driveSerialId": "58SQK2V3FJSA", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 2000398934016, "manufacture": "TOSHIBA", "model": "MG04ACA200E", "raw_model": { "driveInterface": "SATA", "driveModel": "MG04ACA200E", "hexValue": "4f 54 48 53 42 49 20 41 47 4d 34 30 43 41 32 41 30 30 20 45 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-20T18:39:46.000Z", "requiredDaysToPredict": 13, "slotNumBySlotForm": "1", "slotNumber": 1, "stateFromLocal": false },
      { "daDriveState": "PROCESSING", "driveId": 18, "driveSerialId": "58SQK2V6FJSA", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 2000398934016, "manufacture": "TOSHIBA", "model": "MG04ACA200E", "raw_model": { "driveInterface": "SATA", "driveModel": "MG04ACA200E", "hexValue": "4f 54 48 53 42 49 20 41 47 4d 34 30 43 41 32 41 30 30 20 45 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-20T18:40:38.000Z", "requiredDaysToPredict": 13, "slotNumBySlotForm": "2", "slotNumber": 2, "stateFromLocal": false },
      { "daDriveState": "PROCESSING", "driveId": 19, "driveSerialId": "285WK1AWFJSA", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 2000398934016, "manufacture": "TOSHIBA", "model": "MG04ACA200E", "raw_model": { "driveInterface": "SATA", "driveModel": "MG04ACA200E", "hexValue": "4f 54 48 53 42 49 20 41 47 4d 34 30 43 41 32 41 30 30 20 45 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-20T18:41:30.000Z", "requiredDaysToPredict": 13, "slotNumBySlotForm": "3", "slotNumber": 3, "stateFromLocal": false },
      { "daDriveState": "PROCESSING", "driveId": 17, "driveSerialId": "58SYK1ASFJSA", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 2000398934016, "manufacture": "TOSHIBA", "model": "MG04ACA200E", "raw_model": { "driveInterface": "SATA", "driveModel": "MG04ACA200E", "hexValue": "4f 54 48 53 42 49 20 41 47 4d 34 30 43 41 32 41 30 30 20 45 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-20T18:42:22.000Z", "requiredDaysToPredict": 13, "slotNumBySlotForm": "4", "slotNumber": 4, "stateFromLocal": false }
    ],
    "enclosure": "Q189E00711", "enclosureId": 0, "productModel": "TS-451A", "productType": "NAS Host"
  }]


drivePrediction = [
  {
    "chassis_image": "TVS-1282", "chassis_imgs_path": "/cgi-bin/apps/storageManagerV2/images/ChassisViewSVG",
    "drives": [{ "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "M.2 SSD", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": "1", "slotNumber": 1, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "M.2 SSD", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": "2", "slotNumber": 2, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "2.5", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": "1", "slotNumber": 3, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "2.5", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": "2", "slotNumber": 4, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "2.5", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": "3", "slotNumber": 5, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "2.5", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": "4", "slotNumber": 6, "stateFromLocal": false }, { "daDriveState": "PROCESSING", "driveId": 121, "driveSerialId": "W9AD99MV", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 1000204886016, "manufacture": "Seagate", "model": "ST1000DM010-2EP102", "raw_model": { "driveInterface": "SATA", "driveModel": "ST1000DM010-2EP102", "hexValue": "54 53 30 31 30 30 4d 44 31 30 2d 30 45 32 31 50 32 30 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-27T23:57:45.000Z", "requiredDaysToPredict": 13, "slotNumBySlotForm": "1", "slotNumber": 7, "stateFromLocal": false }, { "daDriveState": "PROCESSING", "driveId": 122, "driveSerialId": "W9ADBHZT", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 1000204886016, "manufacture": "Seagate", "model": "ST1000DM010-2EP102", "raw_model": { "driveInterface": "SATA", "driveModel": "ST1000DM010-2EP102", "hexValue": "54 53 30 31 30 30 4d 44 31 30 2d 30 45 32 31 50 32 30 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-27T23:58:40.000Z", "requiredDaysToPredict": 13, "slotNumBySlotForm": "2", "slotNumber": 8, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "3.5", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": "3", "slotNumber": 9, "stateFromLocal": false }, { "daDriveState": "PROCESSING", "driveId": 123, "driveSerialId": "W9ADBT5H", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 1000204886016, "manufacture": "Seagate", "model": "ST1000DM010-2EP102", "raw_model": { "driveInterface": "SATA", "driveModel": "ST1000DM010-2EP102", "hexValue": "54 53 30 31 30 30 4d 44 31 30 2d 30 45 32 31 50 32 30 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-27T23:59:35.000Z", "requiredDaysToPredict": 13, "slotNumBySlotForm": "4", "slotNumber": 10, "stateFromLocal": false }, { "daDriveState": "PROCESSING", "driveId": 124, "driveSerialId": "5VVJEFFM", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 320072933376, "manufacture": "Seagate", "model": "ST3320413CS", "raw_model": { "driveInterface": "SATA", "driveModel": "ST3320413CS", "hexValue": "54 53 33 33 30 32 31 34 43 33 20 53 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-28T00:00:30.000Z", "requiredDaysToPredict": 15, "slotNumBySlotForm": "5", "slotNumber": 11, "stateFromLocal": false }, { "daDriveState": "PROCESSING", "driveId": 125, "driveSerialId": "ZN18Z5HA", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 1000204886016, "manufacture": "Seagate", "model": "ST1000DM010-2EP102", "raw_model": { "driveInterface": "SATA", "driveModel": "ST1000DM010-2EP102", "hexValue": "54 53 30 31 30 30 4d 44 31 30 2d 30 45 32 31 50 32 30 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-28T00:01:25.000Z", "requiredDaysToPredict": 15, "slotNumBySlotForm": "6", "slotNumber": 12, "stateFromLocal": false }, { "daDriveState": "PROCESSING", "driveId": 126, "driveSerialId": "ZN18Z68M", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 1000204886016, "manufacture": "Seagate", "model": "ST1000DM010-2EP102", "raw_model": { "driveInterface": "SATA", "driveModel": "ST1000DM010-2EP102", "hexValue": "54 53 30 31 30 30 4d 44 31 30 2d 30 45 32 31 50 32 30 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-28T00:02:20.000Z", "requiredDaysToPredict": 15, "slotNumBySlotForm": "7", "slotNumber": 13, "stateFromLocal": false }, { "daDriveState": "PROCESSING", "driveId": 127, "driveSerialId": "ZN18Z6HQ", "driveState": "PROCESSING", "driveType": "HDD", "form": "3.5", "manufactureDetails": { "busType": "SATA", "diskCapacity": 1000204886016, "manufacture": "Seagate", "model": "ST1000DM010-2EP102", "raw_model": { "driveInterface": "SATA", "driveModel": "ST1000DM010-2EP102", "hexValue": "54 53 30 31 30 30 4d 44 31 30 2d 30 45 32 31 50 32 30 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-28T00:03:14.000Z", "requiredDaysToPredict": 15, "slotNumBySlotForm": "8", "slotNumber": 14, "stateFromLocal": false }],
    "enclosure": "Q191I16011", "enclosureId": 0, "productModel": "TVS-1282", "productType": "NAS Host"
  },
  {
    "chassis_image": "TL-R1620Sep-RP", "chassis_imgs_path": "/cgi-bin/apps/storageManagerV2/images/ChassisViewSVG",
    "drives": [{ "daDriveState": "PROCESSING", "driveId": 170, "driveSerialId": "ZN1VNSDB", "driveState": "PROCESSING", "driveType": "HDD", "form": "", "manufactureDetails": { "busType": "SATA", "diskCapacity": 1000204886016, "manufacture": "Seagate", "model": "ST1000DM010-2EP102", "raw_model": { "driveInterface": "SATA", "driveModel": "ST1000DM010-2EP102", "hexValue": "54 53 30 31 30 30 4d 44 31 30 2d 30 45 32 31 50 32 30 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20" } }, "predictedDate": "2022-07-28T00:03:25.000Z", "requiredDaysToPredict": 15, "slotNumBySlotForm": 1, "slotNumber": 1, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 2, "slotNumber": 2, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 3, "slotNumber": 3, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 4, "slotNumber": 4, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 5, "slotNumber": 5, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 6, "slotNumber": 6, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 7, "slotNumber": 7, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 8, "slotNumber": 8, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 9, "slotNumber": 9, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 10, "slotNumber": 10, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 11, "slotNumber": 11, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 12, "slotNumber": 12, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 13, "slotNumber": 13, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 14, "slotNumber": 14, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 15, "slotNumber": 15, "stateFromLocal": false }, { "daDriveState": "", "driveId": -1, "driveSerialId": "", "driveState": "", "driveType": "", "form": "", "manufactureDetails": { "busType": "", "diskCapacity": "", "manufacture": "", "model": "", "raw_model": "" }, "predictedDate": "", "requiredDaysToPredict": 15, "slotNumBySlotForm": 16, "slotNumber": 16, "stateFromLocal": false }],
    "enclosure": "Q20CI17895", "enclosureId": 1, "productModel": "TL-R1620Sep-RP", "productType": "EXP 1"
  }
]

export const getTableData = () => {
  const tableData = []
  drivePrediction.forEach((prediction) => {
    const subRows = []
    const { drives, productType, enclosure, productModel } = prediction
    drives.forEach((drive) => {
      const {
        slotNumber, form, driveType, driveSerialId, driveState, manufactureDetails,
      } = drive
      const {
        busType, diskCapacity, manufacture, model,
      } = manufactureDetails
      subRows.push({
        slotNumber,
        form,
        busType,
        driveType,
        driveState,
        threshould: '--',
        manufacture,
        model,
        driveSerialId,
        diskCapacity,
      })
    })
    tableData.push({
      id: enclosure,
      productType,
      subRows,
      productModel,
      isAllRowsExpanded: true,
      isExpanded: true
    })
  })
  return tableData
}
