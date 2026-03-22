# Creating a Simple Plugin (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Creating a Simple Plugin | [](serverapi_requirements.md "Requirements for Plugins") [](serverapi_hooks.md "Hooks") |
| --- | --- | --- |
| --- | --- |

Creating a Simple Plugin
The plugin of the server API MetaTrader 5 is a normal dynamic link library (DLL). Preparation for the plugin creation includes several stages:
  * [Creating a project in Microsoft Visual Studio](serverapi_simpleplugin.htm#new_project)
  * [Project setup](serverapi_simpleplugin.htm#settings)
  * [Specifying the information on the project](serverapi_simpleplugin.htm#info)
  * [Adding Server API to the Project](serverapi_simpleplugin.htm#include)
  * [Entry Points](serverapi_simpleplugin.htm#entry)
  * [Interfaces](serverapi_simpleplugin.htm#interface)
  * [Event Handling](serverapi_simpleplugin.htm#events)

Creating a project in Microsoft Visual Studio
Create a project in Microsoft Visual Studio by clicking 'New' in the 'File' menu:
For the project type, select 'Dynamic-Link Library (DLL)' and click 'Next'. Configure the main parameters:
  * Name: name of the plugin (in our example MyServerPlugin);
  * Location: directory where the project will be created. A project should be created close to the MetaTrader 5 Server API installation place, since later you will need to include its files in the project.

Next, click "Create".
Project setup
Before you begin to develop the plugin, you must configure the project. To do this, click Properties in the Project menu.
The project is set up for version Release, Active (Win64).  
---  
General
The following key settings must be specified in the "Advanced" section:
  * Character Set: Use Unicode Character Set. The Unicode symbols set must be selected, as MetaTrader 5 servers support only such projects.
  * Whole Program Optimization: Use Link Time Code Generation. This option should be used to speed up the application.

C/C++
The following key settings must be specified in the "C/C++" section:
  * Debug Information Format: Disabled. Debugging data must be turned off, as the Release-project is being configured.

C/C++ | Optimization
The following key settings must be specified in the "Optimization" subsection of the "C/C++" section:
  * Optimization: Maximum Optimization (Favor Speed) (/O2). Install this option to speed up the application.
  * Inline Function Expansion: Any Suitable (/Ob2). Install this option to speed up the application.
  * Enable Intrinsic Functions: Yes (/Oi). Install this option to speed up the application.

C/C++ | Code Generation
The following settings must be specified in the "Code Generation" subsection of the "C/C++" section:
  * Enable C++ Exceptions: No. It is recommended to disable exceptions, to prevent the appearance of unhandled exceptions that lead to crash of the trading server.
  * Runtime Library: Multi-threaded (/MT). To avoid problems, connected with different version of the CRT library (Common Runtime Library) or its absence, it is recommended to use the static linking of CRT - /MT. When debugging, use the Multi-threaded Debug (/MTd) parameter.
  * Security Check: No (/GS-). This option must be turned off to speed up the application.
  * Enable Function-Level Linking: No (/Gy-). This option must be turned off to speed up the application.
  * Enable Enhanced Instruction Set: Advanced Vector Extensions (/arch:AVX). AVX instructions set must be turned on to considerably speed up the application. This instructions set is supported by the most of the modern CPUs.

C/C++ | Language
The following key settings must be specified in the "Language" subsection of the "C/C++" section:
  * Enable Run-Time Type Information: No (/GR-). This option must be turned off, as in most cases runtime type identification (RTTI) is not used. RTTI support may slow down the program code execution.

Linker | Debugging
The following key settings must be specified in the "Debugging" subsection of the "Linker" section:
  * Generate Debug Info: No. Debugging data generation must be turned off, as the Release version is being configured.

Specifying the information on the project
For you convenience, and for convenience of future users of the plugin, it is recommended to specify a detailed information about the plugin in the project. To achieve this create the resource file using the "Add Resource" command in the "Project" menu. "Version" must be specified as the created resource type. After the "New" command execution the file will be opened where the information on a plugin and its developer must be specified.
Adding Server API to the Project
To work with the server API, you need to include its header file [MT5ServerAPI.h](files_folders_structure.htm#include) in the project.
To do this, in the file stdafx.h of the project, set a relative path to it in the #include directive. In the example shown in the figure, the path "..\\..\API\MT5APIServer.h" means that to find the header file, it is necessary to go two levels up and go to the API folder.
Entry Points
The server plugin DLL must have two entry points (exported functions):
  * [MTServerAbout](serverapi_simpleplugin.htm#mtserverabout)
  * [MTServerCreate](serverapi_simpleplugin.htm#mtservercreate)

MTServerAbout
Point [MTServerAbout](mtserverabout.md "MTServerAbout") provides the initial information about the plugin to the server. It should be added to the file dllmain.cpp:
Add a global structure of [MTPluginInfo](mtplugininfo.md "MTPluginInfo") type named ExtPluginInfo, which describes the plugin:
MTPluginInfo ExtPluginInfo= { 100, MTServerAPIVersion, L"MyServerPlugin", L"Copyright 2001-2011, MetaQuotes Software Corp.", L"This is my first MetaTrader 5 Server API plugin" };  
---  
This structure will be passed from the [MTServerAbout](mtserverabout.md "MTServerAbout") function.
Then in dllmain.cpp implement the entry point [MTServerAbout](mtserverabout.md "MTServerAbout"). he indication that the function is an entry point, is the internal macro MTAPIEntry: 
MTAPIENTRY MTAPIRES MTServerAbout (MTPluginInfo& info) { info=ExtPluginInfo; return(MT_RET_OK); }  
---  
In this function, fill in the plugin description using the newly created structure. Information is written in variable info.
MTServerCreate
Create an empty entry point [MTServerCreate](mtservercreate.md "MTServerCreate") like the previous one:
| //+---------------------------------+ // |  | //+---------------------------------+ MTAPIENTRY MTAPIRES MTServerCreate(UINT apiversion,IMTServerPlugin** plugin) { } //+---------------------------------+ |
| --- | --- | --- |

---  
Next, in the [MTServerCreate](mtservercreate.md "MTServerCreate") method, we need to create a server API class object that implements the [IMTServerPlugin](imtserverplugin_release.md "Release") interface. Description of this process is available in the next section � ["Interfaces"](serverapi_simpleplugin.htm#interface).
Interfaces
Interface is a set of ready-made classes, functions, structures and constants provided in the application (in this case by the MetaTrader 5 server) for use in external software (plugins). Interaction of a plugin with a server is carried out through special interfaces of server API.
  * In MetaTrader 5 Server API, to obtain copies of data stored in the database, you must first create an instance of the corresponding object. For this purpose, the Create methods of the server API are used.
  * All created objects must be released by explicit call of their Release method.

  
---  
In this section:
  * [Creating a class](serverapi_simpleplugin.htm#class_create) for the implementation of the plugin interface [IMTServerPlugin](imtserverplugin.md "Plugin Interface");
  * [Class implementation](serverapi_simpleplugin.htm#class_implement);
  * [How to work with interfaces](serverapi_simpleplugin.htm#interface_example).

Creating a Class
Create a class that implements the plugin interface [IMTServerPlugin](imtserverplugin.md "Plugin Interface"). Add a C++ class using the command "Add Class" in the "Project" menu:
Specify the following parameters of the class in the class creation wizard:
  * Class name: CPluginInstance;
  * .h file: PluginInstance.h;
  * .cpp: PluginInstance.cpp;
  * Base class: IMTServerPlugin;
  * Access: public.

The key point here is to specify the base class [IMTServerPlugin](imtserverplugin.md "Plugin Interface").
Class Implementation
The CPluginInstance class must implement at least three virtual methods:
  * [Release](imtserverplugin_release.md "Release") This method is called by the Server API to remove the plugin object. Respectively, inside the method call, the plugin should remove itself.
  * [Start](imtserverplugin_start.md "Start") The Start method notifies the plugin on getting started and passes as a parameter the interface of Server API.
  * [Stop](imtserverplugin_stop.md "Stop") When you call the Stop method, the plugin should deinitialize, release all the resources it occupied and clear the pointer to the server API. In other words, the plugin should be ready to the call of the Release method.

Add the following code in the header file PluginInstance.h:
| //+---------------------------------+ // |  | //+---------------------------------+ #pragma once #include "..\\..\API\MT5APIServer.h" //+---------------------------------+ // | Plugin implementation | //+---------------------------------+ class CPluginInstance : public IMTServerPlugin { private: IMTServerAPI* m_api; public: CPluginInstance(void); ~CPluginInstance(void); //--- IMTServerPlugin methods virtual void Release(void); virtual MTAPIRES Start(IMTServerAPI* server); virtual MTAPIRES Stop(void); }; //+---------------------------------+ |
| --- | --- | --- | --- | --- |

---  
As seen in the above listing, in addition to virtual classes, we have created a private class member m_api in order to keep a pointer to the interface of the server API.
Immediate implementation of methods Release, Start and Stop is performed in the file PluginInstance.cpp:
| //+---------------------------------+ // |  | //+---------------------------------+ #include "StdAfx.h" #include "PluginInstance.h" //+---------------------------------+ // |  | //+---------------------------------+ CPluginInstance::CPluginInstance(void) : m_api(NULL) { } //+---------------------------------+ // |  | //+---------------------------------+ CPluginInstance::~CPluginInstance(void) { } //+---------------------------------+ // | Plugin release | //+---------------------------------+ void CPluginInstance::Release(void) { delete this; } //+---------------------------------+ // | Plugin start | //+---------------------------------+ MTAPIRES CPluginInstance::Start(IMTServerAPI* api) { //--- check pointer if(!api) return(MT_RET_ERR_PARAMS); //--- save pointer to Server API interface m_api=api; //--- additional initialization //--- ... //--- ok return(MT_RET_OK); } //+---------------------------------+ // |  | //+---------------------------------+ MTAPIRES CPluginInstance::Stop(void) { //--- deinitialize plugin //--- ... //--- clear Server API pointer m_api=NULL; //--- ok return(MT_RET_OK); } //+---------------------------------+ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

---  
Now let us explain some of the points of the code above:
  * Implementation of the Release method is simple, there is only deleting of an object using delete this.
  * In the Start method we receive a pointer to the server API and save it in m_api. After that further initialization can be performed;
  * In the Stop method, the pointer to the server API is deinitialized and nulled.

Now we need to go back to the method [MTServerCreate](mtservercreate.md "MTServerCreate") and implement the following actions:
  * Check the parameters (passed pointer);
  * Create an object of the plugin.

To do this, write the following code inside [MTServerCreate](mtservercreate.md "MTServerCreate"):
| //+---------------------------------+ // |  | //+---------------------------------+ MTAPIENTRY MTAPIRES MTServerCreate(UINT apiversion,IMTServerPlugin** plugin) { //--- check parameters if(!plugin) return(MT_RET_ERR_PARAMS); //--- create plugin object if(((*plugin)=new CPluginInstance())==NULL) return(MT_RET_ERR_MEM); //--- ok return(MT_RET_OK); } //+---------------------------------+ |
| --- | --- | --- |

---  
In dllmain.cpp we also need to include the header file PluginInstance.h:
# include "PluginInstance.h"  
---  
To this point, the plugin has been already created, but it does not have any functionality.
An example of working with the interface
As an example, let's analyze the reception of the current plugin configuration. Supplement the Start method in PluginInstance.cpp the following way:
MTAPIRES CPluginInstance::Start(IMTServerAPI* api) { IMTConPlugin* config; //--- check pointer if(!api) return(MT_RET_ERR_PARAMS); //--- save pointer to Server API interface m_api=api; //--- create plugin config instance if((config=m_api->PluginCreate())==NULL) return(MT_RET_ERR_MEM); //--- receive current plugin config if((m_api->PluginCurrent(config))!=MT_RET_OK) { config->Release(); return(MT_RET_ERROR); } //--- say "hello world!" in server journal m_api->LoggerOut(MTLogOK,L"Hello world from %s!",config->Name()); //--- free plugin config config->Release(); //--- ok return(MT_RET_OK); } //+---------------------------------+  
---  
Explanation to the code:
  * In the beginning, we have added variable config, to which later the current plugin configuration will be passed;
  * Next, we've created an instance of the plugin configuration (config) using the [PluginCreate](imtserverapi_plugincreate.md "PluginCreate") function;
  * The next step, we've recorded the current configuration of the plugin in the created instance config using the [PluginCurrent](imtserverapi_plugincurrent.md "PluginCurrent") function;
  * In case of successful receipt of a configuration, in the server a messages appears of type [MTLogOk](journal.htm#enmtlogcode) containing the "Hello world!" sentence and the object name. The [LoggerOut](imtserverapi_loggerout.md "LoggerOut") function is used for writing messages into the log.
  * The last step is the deletion of the object config using the Release method.

It should be noted that check for successful implementation is performed for virtually every operation. In case of failure, the corresponding [code](reference_retcodes.md "Return Codes") is returned.
Thus, we have learned to create plugins and work with interfaces.
Event Handling
MetaTrader 5 Server API allows to handle various events appearing on the platform servers (in databases and configurations), and respond to them one way or another.
A plugin starts processing of events only after the [IMTServerPlugin::Start](imtserverplugin_start.md "Start") method is executed.  
---  
For example, consider processing of events of orders (adding, editing and deleting).
Interface Implementation
To work with the above events, you must have your own implementation of the interface for processing order events. To do this, inherit CPluginInstance from [IMTOrderSink](imtordersink.md "IMTOrderSink") and add the necessary methods to the PluginInstance.h file:
| //+---------------------------------+ // |  | //+---------------------------------+ #pragma once #include "..\\..\API\MT5APIServer.h" //+---------------------------------+ // | Plugin implementation | //+---------------------------------+ class CPluginInstance : public IMTServerPlugin, public IMTOrderSink { private: IMTServerAPI* m_api; public: CPluginInstance(void); ~CPluginInstance(void); //--- IMTServerPlugin methods virtual void Release(void); virtual MTAPIRES Start(IMTServerAPI* server); virtual MTAPIRES Stop(void); //--- open orders events virtual void OnOrderAdd(const IMTOrder* order); virtual void OnOrderUpdate(const IMTOrder* order); virtual void OnOrderDelete(const IMTOrder* order); }; //+---------------------------------+ |
| --- | --- | --- | --- | --- |

---  
It should be noted that it is not necessary to implement all methods of the Sink-interface. You can use only those that you need. In this case, of the seven available methods of the [IMTOrderSink](imtordersink.md "IMTOrderSink") interface, we used only three ([OnOrderAdd](imtordersink_onorderadd.md "OnOrderAdd"), [OnOrderUpdate](imtordersink_onorderupdate.md "OnOrderUpdate") and [OnOrderDelete](imtordersink_onorderdelete.md "OnOrderDelete")).
Implementation of Methods
The next step is to implement the above three methods in the file PluginInstance.cpp. For this purpose, the following code is added in it:
| //+---------------------------------+ // | Processing of adding a new order | //+---------------------------------+ void CPluginInstance::OnOrderAdd(const IMTOrder* order) { MTAPISTR descr; //--- check if(!order) return; //--- print order description m_api->LoggerOut(MTLogOK,L"new order %s added",order->Print(descr)); } //+---------------------------------+ // | Processing of updating an order | //+---------------------------------+ void CPluginInstance::OnOrderUpdate(const IMTOrder* order) { MTAPISTR descr; //--- check if(!order) return; //--- print order description m_api->LoggerOut(MTLogOK,L"order %s updated",order->Print(descr)); } //+---------------------------------+ // | Processing of deleting an order | //+---------------------------------+ void CPluginInstance::OnOrderDelete(const IMTOrder* order) { MTAPISTR descr; //--- check if(!order) return; //--- print order description m_api->LoggerOut(MTLogOK,L"order %s deleted",order->Print(descr)); } //+---------------------------------+ |
| --- | --- | --- | --- | --- | --- | --- |

---  
Let's consider the implementation of the methods in details:
  * To get the order description, the descr variable of type [MTAPISTR](reference_types.htm#mtapistr) is added;
  * Then the pointer to the order object is checked;
  * Next, using the [LoggerOut](imtserverapi_loggerout.md "LoggerOut") function, in the log an entry is added, with the order description and description of what was done with it.

Subscribing and unsubscribing from events
To receive events, you need to subscribe first. For this purpose, we need to add the following code in the implementation of the [Start](imtserverplugin_start.md "Start") method in file PluginInstance.cpp:
//--- subscribe to order events m_api->OrderSubscribe(this);  
---  
Subscribing to the events of orders from the plugin is done by passing a pointer to [IMTOrderSink](imtordersink.md "IMTOrderSink") to the [OrderSubscribe()](imtserverapi_orderunsubscribe.md "OrderUnsubscribe") function as a parameter. In this case, a pointer to itself (this) is passed, since we have already implemented the IMTOrderSink interface in the CPluginInstance class.
Don't forget that the plugin must unsubscribe from the events. Here is the code:
//--- unsubscribe from order events m_api->OrderUnsubscribe(this);  
---  
This completes the implementation of handling of order events. Similarly, you can subscribe to any other event.
  * Event notifications are transmitted sequentially from plugin to plugin, in the order of their [configurations](serverapi_configure_plugin.md "Configuration of Plugins") on the main server.
  * When you call the plugin stop method [IMTServerPlugin::Stop](imtserverplugin_stop.md "Stop"), the plugin automatically unsubscribes from all of the events to which it subscribed earlier.

  
---