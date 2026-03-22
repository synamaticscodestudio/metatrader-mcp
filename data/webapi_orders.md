# Orders (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading")/ Orders | [](webapi_trading.md "Trading") [](webapi_order_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Orders
The MetaTrader 5 Web API provides a number of requests for working with clients' orders.
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/order/get](webapi_order_get.md "Get Open by Ticket") | Get an open order by a ticket. |
| [/api/order/get_total](webapi_order_get_total.md "Get Open Total") | Get the total number of a client's open orders. |
| [/api/order/get_page](webapi_order_get_page.md "Get Open Paged") | Get open orders by the login of a client. |
| [/api/order/get_batch](webapi_order_get_batch.md "Get Multiple Open") | Get information about multiple open orders by a list of logins, tickets or groups. |
| [/api/order/update](webapi_order_update.md "Update Open") | Change open order on the server. |
| [/api/order/delete](webapi_order_delete.md "Delete Open") | Deletes one or more open orders by ticket numbers. |
| [/api/order/cancel](webapi_order_cancel.md "Move to History") | Move one or several open orders to history. |
| [/api/history/get](webapi_history_get.md "Get Closed by Ticket") | Get an order from a history by its ticket. |
| [/api/history/get_total](webapi_history_get_total.md "Get Closed Total") | Get the number of orders in the history in the specified time range. |
| [/api/history/get_page](webapi_history_get_page.md "Get Closed Paged") | Get a client's history of orders in the specified time range. |
| [/api/history/get_batch](webapi_history_get_batch.md "Get Multiple Closed") | Get information about multiple closed orders by a list of logins, tickets or groups. |
| [/api/history/update](webapi_history_update.md "Update Closed") | Change closed order on the server. |
| [/api/history/delete](webapi_history_delete.md "Delete Closed") | Deletes one or more closed orders by ticket numbers. |
| [/api/order/backup/list](webapi_order_backup_list.md "Get Backups List") | Get order backup creation dates within the specified time range. |
| [/api/order/backup/get](webapi_order_backup_get.md "Get Orders from Backup") | Get information about one or more orders from a specific backup on the server. |
| [/api/order/backup/restore](webapi_order_backup_restore.md "Restore from Backup") | Recover an order from a backup. |
| [/api/order/reopen](webapi_order_reopen.md "Reopen Order") | Reopen a pending order from the account history. |

The format, in which the data about orders are passed, are described in the ["Data Structure"](webapi_order_data_structure.md "Data Structure") section.