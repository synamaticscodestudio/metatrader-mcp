# IMTDatasetField (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces")/ IMTDatasetField | [](imtdataset_summarytotal.md "SummaryTotal") [](imtdatasetfield_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField
The IMTDatasetField interface is used for descriptions of the fields of accounts, deals and clients used in relevant data [request](reportapi_dataset.md "Dataset Interfaces") from the trading platform database. The interface contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdatasetfield_release.md "Release") | Delete the current object. |
| [Assign](imtdatasetfield_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdatasetfield_clear.md "Clear") | Clear an object. |
| [Id](imtdatasetfield_id.md "Id") | Get and set the field ID. |
| [Type](imtdatasetfield_type.md "Type") | Get the field type. |
| [Offset](imtdatasetfield_offset.md "Offset") | Get and set the offset inside one entry defining the data beginning. |
| [Size](imtdatasetfield_size.md "Size") | Get and set the size of the field data in bytes. |
| [Flags](imtdatasetfield_flags.md "Flags") | Get and set the field flags. |
| [WhereAddInt](imtdatasetfield_whereaddint.md "WhereAddInt") | Add a selection condition for fields of the int type. |
| [WhereAddIntArray](imtdatasetfield_whereaddintarray.md "WhereAddIntArray") | Add an array of selection conditions for fields of the int type. |
| [WhereAddUInt](imtdatasetfield_whereadduint.md "WhereAddUInt") | Add a selection condition for fields of the uint type. |
| [WhereAddUIntArray](imtdatasetfield_whereadduintarray.md "WhereAddUIntArray") | Add an array of selection conditions for fields of the uint type. |
| [WhereAddDouble](imtdatasetfield_whereadddouble.md "WhereAddDouble") | Add a selection condition for fields of the double type. |
| [WhereAddDoubleArray](imtdatasetfield_whereadddoublearray.md "WhereAddDoubleArray") | Add an array of selection conditions for fields of the double type. |
| [WhereAddString](imtdatasetfield_whereaddstring.md "WhereAddString") | Add a selection condition for fields of the string type. |
| [WhereAddStringArray](imtdatasetfield_whereaddstringarray.md "WhereAddStringArray") | Add an array of selection conditions for fields of the string type. |
| [BetweenInt](imtdatasetfield_betweenint.md "BetweenInt") | Add a selection condition as a range of values for fields of the int type. |
| [BetweenUInt](imtdatasetfield_betweenuint.md "BetweenUInt") | Add a selection condition as a range of values for fields of the uint type. |
| [BetweenDouble](imtdatasetfield_betweendouble.md "BetweenDouble") | Add a selection condition as a range of values for fields of the double type. |

The IMTDataset interface contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnFieldType](imtdatasetfield_enum.htm#enfieldtype) | Types of fields. |
| [EnFieldId](imtdatasetfield_enum.htm#enfieldid) | Field IDs. |
| [EnFieldFlags](imtdatasetfield_enum.htm#enfieldflags) | Field flags. |
| [EnGender](imtdatasetfield_enum.htm#engender) | Values of the "Gender" property. |
| [EnClientType](imtdatasetfield_enum.htm#enclienttype) | Client types. |
| [EnClientStatus](imtdatasetfield_enum.htm#enclientstatus) | Client statuses. |
| [EnEmployment](imtdatasetfield_enum.htm#enemployment) | Client types by employment. |
| [EnEmploymentIndustry](imtdatasetfield_enum.htm#enemploymentindustry) | Client employment areas. |
| [EnEducationLevel](imtdatasetfield_enum.htm#eneducationlevel) | Client education levels. |
| [EnWealthSource](imtdatasetfield_enum.htm#enwealthsource) | Clients' income sources. |
| [EnPreferredCommunication](imtdatasetfield_enum.htm#enpreferredcommunication) | Preferred contact methods. |
| [EnTradingExperience](imtdatasetfield_enum.htm#entradingexperience) | Clients' trading experience. |