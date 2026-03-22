# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ Clear | [](imtgeo_assign.md "Assign") [](imtgeo_ipv4from.md "IPv4From") |
| --- | --- | --- |
| --- | --- |

IMTGeo::Clear
Clear an object.
C++
MTAPIRES IMTGeo::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTGeo.Clear()  
---  
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.