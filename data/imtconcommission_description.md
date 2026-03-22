# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ Description | [](imtconcommission_name.md "Name") [](imtconcommission_path.md "Path") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::Description
Get the description of commission configuration.
C++
LPCWSTR IMTConCommission::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommission.Description()  
---  
Python (Manager API)
MTConCommission.Description  
---  
Return Value
If successful, it returns a pointer to a string with the description of the commission configuration. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConCommission](imtconcommission.md "IMTConCommission") object.
To use the string after the object removal (call of the [IMTConCommission::Release](imtconcommission_release.md "Release") method of this object), a copy of it should be created.
IMTConCommission::Description
Set the description of commission configuration.
C++
MTAPIRES IMTConCommission::Description( LPCWSTR descr // Description of the configuration )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.Description( string descr // Description of the configuration )  
---  
Python (Manager API)
MTConCommission.Description  
---  
Parameters
descr
[in] Description of the commission configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of commission configuration description is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.