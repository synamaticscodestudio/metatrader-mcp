# Selected Symbols (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ Selected Symbols | [](imtmanagerapi_subscriptioncfgrequestbyid.md "SubscriptionCfgRequestByID") [](imtmanagerapi_selectedadd.md "SelectedAdd") |
| --- | --- | --- |
| --- | --- |

Functions for Operations with Selected Symbols
The functions described in this section allow users to create an analogue of the "Market Watch" window in applications developed using the Manager API. The main purpose of managing the list of selected symbols is a control of the incoming price stream delivered to the application. In other words, the application only receives prices of selected symbols.
The functions for managing the list of selected symbols perform the same actions as the context menu commands of Market Watch:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [SelectedAdd](imtmanagerapi_selectedadd.md "SelectedAdd") | Add a symbol to the list by the name. |
| [SelectedAddBatch](imtmanagerapi_selectedaddbatch.md "SelectedAddBatch") | Add a batch of symbols to the list of selected symbols. |
| [SelectedAddAll](imtmanagerapi_selectedaddall.md "SelectedAddAll") | Add all available symbols to the list of selected symbols. |
| [SelectedDelete](imtmanagerapi_selecteddelete.md "SelectedDelete") | Remove a symbol from the list of selected symbols by the name or index. |
| [SelectedDeleteBatch](imtmanagerapi_selecteddeletebatch.md "SelectedDeleteBatch") | Delete a batch of symbols from the list of selected symbols. |
| [SelectedDeleteAll](imtmanagerapi_selecteddeleteall.md "SelectedDeleteAll") | Delete all symbols from the list of selected symbols |
| [SelectedShift](imtmanagerapi_selectedshift.md "SelectedShift") | Shift a symbol in the list of selected symbols |
| [SelectedTotal](imtmanagerapi_selectedtotal.md "SelectedTotal") | Get the total number of symbols in the list of selected symbols. |
| [SelectedNext](imtmanagerapi_selectednext.md "SelectedNext") | Get the name of a symbol by a position in the list of selected symbols. |

  * To work with the list of selected symbols, an application should be connected in the PUMP_MODE_SYMBOLS [pumping mode](imtmanagerapi_enpumpmodes.md "Pumping Mode").
  * When enabling PUMP_MODE_ORDERS and PUMP_MODE_POSITIONS pumping modes, pumping of symbols is automatically enabled, while the symbols, for which there are orders and positions, are automatically added to the list of selected symbols.

  
---