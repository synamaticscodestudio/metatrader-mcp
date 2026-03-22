# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ Assign | [](imtgeo_release.md "Release") [](imtgeo_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTGeo::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTGeo::Assign( const IMTGeo* obj // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTGeo.Assign( CIMTGeo obj // source object )  
---  
Parameters
obj
[in] Source object.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.