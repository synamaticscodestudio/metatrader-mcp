# Ready-made Examples (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API")/ Ready-made Examples | [](managerapi_preparing.md "Getting Started") [](managerapi_net.md "Implementation in .NET") |
| --- | --- | --- |
| --- | --- |

Ready-made Examples
The installation package of the MetaTrader 5 Manager API includes several ready-made examples of applications represented as source code. Analysis of the examples allows a programmer to quickly get acquainted with peculiarities of working with the Manager API and start developing their own applications.
The examples are located in the [/Examples](files_folders_structure.htm#exmaples) folder of the MetaTrader 5 Manager API installation directory.
  * BalanceExample — an example of performing the [balance operations](imtmanagerapi_dealerbalance.md "DealerBalance") on user accounts, such as deposit and withdrawal, credit operations, etc.;
  * DealerExample — a GUI application that demonstrates operation of the [dealer functions](imtmanagerapi_dealing.md "Dealing") of the Manager API: start and stop dealing, get another trade request, answer a request (confirm or reject);
  * SimpleDealer — a console application that demonstrates operation of the dealer functions of the Manager API: start and stop dealing, get another trade request, answer a request (confirm or reject);
  * SimpleManager — an example that demonstrates how to create the Manager API interfaces and work with them: allocation of a new account, requesting an account, withdrawing or depositing money, opening a position, sending an email or a custom command.
  * ManagerAPIExtension — example showing implementation of sending custom commands to the server. APIExtension plugin must be installed on the server for handling these commands. The plugin in source codes is included as an example in MetaTrader 5 Server API package.
