# Get Deals from Backup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Get Deals from Backup | [](webapi_deal_backup_list.md "Get Backups List") [](webapi_deal_backup_restore.md "Restore from Backup") |
| --- | --- | --- |
| --- | --- |

Get Deals from Backup
The request allows receiving information about one or more deals from a specific backup on the server.
Request Format
GET /api/deal/backup/get?backup=date&login=login&from=beginning&to=end&server=identifier POST /api/deal/backup/get?backup=date&login=login&from=beginning&to=end&server=identifier  
---  
Response Format
{ "retcode" : "code description", "answer" : [ description of deals ] }  
---  
Example
//--- request to the server GET /api/deal/backup/get?backup=1574122620&login=104366 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Deal" : "11918642", "ExternalID" : '', "Login" : "104366", ... }, {  "Deal" : "11918643", "ExternalID" : "", "Login" : "104366", ... }, ... ] }  
---  
Request Parameters
  * backup — backup copy date. To get the list of available backups, use the [/api/deal/backup/list](webapi_deal_backup_list.md "Get Backups List") request.
  * server — identifier of the backup server from which the deal is requested. Optional parameter. If not specified, data will be requested from the first backup server in the list.
  * login — the login of the user whose deals should be retrieved from the backup database. Mandatory parameter.
  * from — the beginning of the period for requesting deals. The date is specified in seconds elapsed since 01.01.1970. Optional parameter.
  * from — the end of the period for requesting deals. The date is specified in seconds elapsed since 01.01.1970. Optional parameter.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — deal parameters in JSON format. The complete description of the passed deal parameters is given under the [Data structure](webapi_deal_data_structure.md "Data Structure") section.
