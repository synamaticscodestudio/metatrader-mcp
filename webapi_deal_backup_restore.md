# Restore from Backup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Restore from Backup | [](webapi_deal_backup_get.md "Get Deals from Backup") [](webapi_positions.md "Positions") |
| --- | --- | --- |
| --- | --- |

Restore Deals from Backup
The request allows restoring deals from backup databases.
Request Format
POST /api/deal/backup/restore { Deal description in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/deal/backup/restore { "Deal" : "11918642", "ExternalID" : '', "Login" : "104366", ... } //--- server response { "retcode" : "0 Done", "answer" : {  "Deal" : "11918642", "ExternalID" : '', "Login" : "104366", ... } }  
---  
Request Parameters
The request has no parameters. The description of the deal to be restored is passed in JSON format as an additional body. To receive a deal description from the backup, use the [/api/deal/backup/get](webapi_deal_backup_get.md "Get Deals from Backup") request.
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — restored deal parameters in JSON format. The complete description of deal parameters is given under the [Data structure](webapi_deal_data_structure.md "Data Structure") section.

Note
Restored deals are not deleted from the backup.