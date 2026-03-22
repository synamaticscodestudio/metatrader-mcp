# Hooks (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Hooks | [](serverapi_simpleplugin.md "Creating a Simple Plugin") [](hook_scheme.md "Request Processing on the Server") |
| --- | --- | --- |
| --- | --- |

Hooks
Some interfaces of the server API contain methods-hooks that allow to influence the behavior of the server when processing an event. To help you better understand their essence, here is a table comparing the properties of hooks and [events](serverapi_simpleplugin.htm#events).
| Events | Hooks |
| --- | --- |
| --- | --- |
| Sent upon the fact of an action. | Sent before an action. |
| Is intended only for notifications. | Allows influencing the action performed. |
| All parameters of methods-events are constant. Accordingly, they can be read but cannot be changed. | Some parameters are not constant. Accordingly, they can be changed. |
| All subscribers receive event notifications. | Hooks are handles in the order of [configurations of plugins](config_plugins.md "Plugins"). Within a plugin, handling is performed in the order of subscribing to an appropriate interface. Hook is handled until the first method that returns code other than [MT_RET_OK](retcodes_successful.md "Successful completion") (except otherwise stated). In this case, the hook is not forwarded to next methods. |
| Methods of events are of the "void" type. | Methods-hooks will always return one of the [return codes](reference_retcodes.md "Return Codes"). |

Here is a diagram of hook handling: