# Tabular Reports (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Tabular Reports | [](reportapi_simple_report.md "Creating a Simple Report") [](reportapi_html.md "HTML Reports") |
| --- | --- | --- |
| --- | --- |

Tabular Reports
Tabular reports are transferred to the MetaTrader 5 Manager terminal as the binary data structured in a certain way. Such a table consists of three basic elements:
  * Header — names of the table columns. During a header formation the size (in bytes) and the type of each table column are specified. According to this parameters the data will be formed;
  * Data — the data is described by separate lines divided into fields according to the types and sizes of the columns specified in the header.
  * Summary — a cell displaying any table column result.

The total size of a generated tabular report must not exceed 4GB.  
---  
Tabular report creation example
Generate a simple tabular report that will display clients names and their leverage sizes using the previously [created report example](reportapi_simple_report.md "Creating a Simple Report"). Generation process can be divided into the following steps:
  * [Report description](reportapi_tables.htm#description)
  * [Table record description](reportapi_tables.htm#table_record)
  * [Report generation and output](reportapi_tables.htm#implementation)

Report description
Before the start of a request implementation and data output we must return to the reports type and its parameters described in the [MTReportInfo](reportapi_simple_report.htm#mtreportinfo) structure.
| //+---------------------------------+ // | Module description structure | //+---------------------------------+ const MTReportInfo CMyTableReport::s_info= { 100, MTReportAPIVersion, MTReportInfo::IE_VERSION_ANY, L"My Table Report", L"Copyright 2001-2011, MetaQuotes Software Corp.", L"MetaTrader 5 Report API plug-in", 0, MTReportInfo::TYPE_TABLE, { 0 }, { // Parameters { MTReportParam::TYPE_GROUPS, MTAPI_PARAM_GROUPS, L"*" }, },1 // Number of parameters }; //+---------------------------------+ |
| --- | --- | --- |

---  
The key parameters here are:
  * MTReportInfo::TYPE_TABLE — [report tabular type](mtreportinfo.htm#entypes);
  * { MTReportParam::TYPE_GROUPS, MTAPI_PARAM_GROUPS, L"*" } — [external parameters](mtreportparam.md "MTReportParam") of a report generation (type, name and value by default) that are set during a report request in MetaTrader 5 Manager. A list of the groups, from which the clients will be requested, may be set for that report. All groups is a default value (the symbol "*" is indicated);
  * 1 — number of parameters.

The [MTAPI_PARAM_GROUPS](mtreportparam.htm#parameters) macros is used as the parameter name. This macros inserts a name of a field where the groups in the manager terminal are selected.  
---  
Table record description
Also, the structure of a tabular report record that will be created must be described before the generation process starts. Name the structure "TableRecord and add its description into the MyTableReport.h file to the [CMyTableReport](reportapi_simple_report.htm#implementation) class private part:
class CMyTableReport : public IMTReportContext { private: static const MTReportInfo s_info; // Report data //--- table record #pragma pack(push,1) struct TableRecord { wchar_t name[32]; UINT leverage; }; #pragma pack(pop)  //--- ... }; //+---------------------------------+  
---  
Report generation and output process
Report generation and output are performed in the [CMyTableReport::Generate](reportapi_simple_report.htm#generate) method.
| //+---------------------------------+ // | Report generation method | //+---------------------------------+ MTAPIRES CMyTableReport::Generate(const UINT type,IMTReportAPI *api) { IMTDatasetColumn *column=NULL; IMTUser *user=NULL; UINT64 *logins=NULL; UINT logins_total=0; MTAPIRES res; //--- Checking for a pointer if(!api) return(MT_RET_ERR_PARAMS); //--- Checking the type of a requested report if(type!=MTReportInfo::TYPE_TABLE) return(MT_RET_ERR_PARAMS); //--- creating a column object if((column=api->TableColumnCreate())==NULL) { return(MT_RET_ERR_MEM); } //--- Preparing the first column column->Clear(); column->Name(L"Name"); column->ColumnID(1); column->Offset(offsetof(TableRecord,name)); column->Type(IMTDatasetColumn::TYPE_STRING); column->Size(MtFieldSize(TableRecord,name)); if((res=api->TableColumnAdd(column))!=MT_RET_OK) { column->Release(); return(res); } //--- preparing the second column column->Clear(); column->Name(L"Leverage"); column->ColumnID(2); column->Offset(offsetof(TableRecord,leverage)); column->Type(IMTDatasetColumn::TYPE_UINT32); //--- if((res=api->TableColumnAdd(column))!=MT_RET_OK) { column->Release(); return(res); } //--- column->Release(); //--- Get the list of users if((res=api->ParamLogins(logins,logins_total))!=MT_RET_OK) return(res); //--- Check whether the data has been received? if(logins && logins_total) { //--- Create an object of a client record if((user=api->UserCreate())==NULL) { api->Free(logins); return(MT_RET_ERR_MEM); } //--- Table generation for(UINT i=0;i<logins_total;i++) { //--- if(api->UserGet(logins[i],user)!=MT_RET_OK) continue; //--- TableRecord record={0}; //--- CMTStr::Copy(record.name,user->Name()); record.leverage=user->Leverage(); //--- if((res=api->TableRowWrite(&record,sizeof(record)))!=MT_RET_OK) { api->Free(logins); user->Release(); return(res); } } //--- Release of the logins list api->Free(logins); //--- user->Release(); } //--- Successful return(MT_RET_OK); } //+---------------------------------+ |
| --- | --- | --- |

---  
Now, let's thoroughly examine this example by dividing it into blocks:
  * [Variables](reportapi_tables.htm#variables)
  * [Checks](reportapi_tables.htm#checks)
  * [A column object creation](reportapi_tables.htm#column_create)
  * [Preparing the first column](reportapi_tables.htm#first_column)
  * [Preparing the second column](reportapi_tables.htm#second_column)
  * [Get the list of users](reportapi_tables.htm#list)
  * [Report generation](reportapi_tables.htm#generation)

Variables
Essential variables are declared at first:
IMTDatasetColumn *column=NULL; IMTUser *user=NULL; UINT64 *logins=NULL; UINT logins_total=0; MTAPIRES res;  
---  
It is recommended to null all variables during the declaration.
Checks
//--- Checking for a pointer if(!api) return(MT_RET_ERR_PARAMS); //--- Checking the type of a requested report if(type!=MTReportInfo::TYPE_TABLE) return(MT_RET_ERR_PARAMS);  
---  
Checking the pointer validity at the [IMTReportAPI](imtreportapi.md "Main Report Interface") and also verification of the requested report type (transferred by the type parameter into the CMyTableReport::Generate function) are performed in this block.
A column object creation
//--- creating a column object if((column=api->TableColumnCreate())==NULL) { return(MT_RET_ERR_MEM); }  
---  
The [TableColumnCreate](imtreportapi_tablecolumncreate.md "TableColumnCreate") method of the IMTReportAPI interface is used for a column object creation.
Preparing the first column
The first column will contain user names. The column preparation practically means specifying a cell with its header.
//--- Preparing the first column column->Clear(); column->Name(L"Name"); column->ColumnID(1); column->Offset(offsetof(TableRecord,name)); column->Type(IMTDatasetColumn::TYPE_STRING); column->Size(MtFieldSize(TableRecord,name)); if((res=api->TableColumnAdd(column))!=MT_RET_OK) { column->Release(); return(res); }  
---  
Procedure:
  * The column is cleared using the [IMTDatasetColumn::Clear](imtdatasetcolumn_clear.md "Clear") method;
  * The "Name" is assigned to the column using the [IMTDatasetColumn::Name](imtdatasetcolumn_name.md "Name") method;
  * ID "1" is assigned to the column using the [IMTDatasetColumn::ColumnID](imtdatasetcolumn_columnid.md "ColumnID") method;
  * A shift in bytes is assigned to the column using the [IMTDatasetColumn::Offset](imtdatasetcolumn_offset.md "Offset") method. "Offsetof" macros is used in the example to avoid calculation of a shift for each column (calculated as previous columns size). The stddef.h file must be included into the project to use the macros. The name of a field from the previously described table record structure ([TableRecord](reportapi_tables.htm#table_record)) is transferred to the macros.
  * "String" type is assigned to the column using the [IMTDatasetColumn::Type](imtdatasetcolumn_type.md "Type") method;
  * A size in bytes is assigned to the column using the [IMTDatasetColumn::Size](imtdatasetcolumn_size.md "Size") method. The MtFieldSize macros is used to simplify the defining a column size. The name of a field from the previously described table record structure (TableRecord) is also transferred to the macros. This macros is not standard. Its realization must be added to the stdafx.h file.
  * The generated column is then added to the IMTReportAPI object copy with the help of the [IMTReportAPI::TableColumnAdd](imtreportapi_tablecolumnadd.md "TableColumnAdd") method.
  * In case of an adding error, the column object must be necessarily freed by using the Release method ([IMTDatasetColumn::Release](imtdatasetcolumn_release.md "Release")).

MtFieldSize macros realization:
| //+---------------------------------+ // | Macros for a size calculation | //+---------------------------------+ #define MtFieldSize(type,member) (sizeof(((type*)(0))->member)) //+---------------------------------+ |
| --- | --- | --- |

---  
Preparing the second column
The column for a leverage size recording must be prepared similar to the previous column:
//--- preparing the second column column->Clear(); column->Name(L"Leverage"); column->ColumnID(2); column->Offset(offsetof(TableRecord,leverage)); column->Type(IMTDatasetColumn::TYPE_UINT32); //--- if((res=api->TableColumnAdd(column))!=MT_RET_OK) { column->Release(); return(res); } //--- column->Release();  
---  
In all cases except strings data size is specified by its type ([IMTDatasetColumn::EnType](imtdatasetcolumn_enum.htm#entype)). Therefore, the [IMTDatasetColumn::Size](imtdatasetcolumn_size.md "Size") method is not called during the second column preparation.
The column object must be freed by calling the Release method ([IMTDatasetColumn::Release](imtdatasetcolumn_release.md "Release")) after the second column preparation is finished.
Get the list of users
//--- Get the list of users if((res=api->ParamLogins(logins,logins_total))!=MT_RET_OK) return(res);  
---  
The [IMTReportAPI::ParamLogins](imtreportapi_paramlogins.md "ParamLogins") method is used to get the list of users. To make the method work, the [report description](reportapi_tables.htm#description) contains the [MTReportParam::TYPE_GROUPS](mtreportparam.md "MTReportParam") parameter that has been turned on.
Report generation
After a user list is received the name and the leverage must be requested for each of them in the loop.
//--- check whether the data has been received if(logins && logins_total) { //--- Create an object of a client record if((user=api->UserCreate())==NULL) { api->Free(logins); return(MT_RET_ERR_MEM); } //--- Table generation for(UINT i=0;i<logins_total;i++) { //--- if(api->UserGet(logins[i],user)!=MT_RET_OK) continue; //--- TableRecord record={0}; //--- CMTStr::Copy(record.name,user->Name()); record.leverage=user->Leverage(); //--- if((res=api->TableRowWrite(&record,sizeof(record)))!=MT_RET_OK) { api->Free(logins); user->Release(); return(res); } } //--- Release of the logins list api->Free(logins); //--- user->Release(); } //--- Successful return(MT_RET_OK); } //+---------------------------------+  
---  
Procedure:
  * Whether the list of logins is received is checked in the if statement.
  * A client record object is then created by using the [IMTReportAPI::UserCreate](imtreportapi_usercreate.md "UserCreate") method. In case of a creation error, received list of logins is freed by using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.
  * Client records (IMTUser) for each of the received logins are requested in the for loop using the [IMTReportAPI::UserGet](imtreportapi_userget.md "UserGet") method.
  * Record table record structure ([TableRecord](reportapi_tables.htm#table_record)) sets to zero.
  * A name from a client record is copied to an appropriate record structure field using the auxiliary CMTStr::Copy method.
  * A leverage value is copied from a client record to an appropriate record structure field.
  * Received row is assigned to the api report object using the [IMTReportAPI::TableRowWrite](imtreportapi_tablerowwrite.md "TableRowWrite") method. In case of a record error, received list of logins is freed by using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.
  * After the report generation is complete the previously received array of logins is freed using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.
  * The client record object is freed by the Release method ([IMTUser::Release](imtuser_release.md "Release")).
  * [MT_RET_OK](retcodes_successful.md "Successful completion") operation successful accomplishment code is returned at the end of the report generation.
