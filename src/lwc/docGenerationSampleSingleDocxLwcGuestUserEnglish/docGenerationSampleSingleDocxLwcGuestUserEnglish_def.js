export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"rpai-7290777763@industryapps.com","userId":"0055f000002vtR3AAI","userCurrencyCode":"USD","timeStamp":"2021-09-24T08:02:15.754Z","sOmniScriptId":"a295f000000LQIpAAO","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge"}],"message":{},"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"6405d8b2-8fd2-f294-3111-558306287538","labelMap":{"GeneratePdfDocument":"Generate Document:GeneratePdfDocument","UseTemplateDRExtract":"GenerationOptions:UseTemplateDRExtract","PdfGenerationSource":"GenerationOptions:PdfGenerationSource","DocGenerationMechanism":"GenerationOptions:DocGenerationMechanism","DocumentViewer":"GenerationOptions:DocumentViewer","AttachFileFormat":"GenerationOptions:AttachFileFormat","DownloadFileFormat":"GenerationOptions:DownloadFileFormat","SelectTemplate":"PickTemplate:SelectTemplate","TemplateType":"EnterObject:TemplateType","ObjectId":"EnterObject:ObjectId","Generate Document":"Generate Document","SetGenerationOptions":"SetGenerationOptions","GenerationOptions":"GenerationOptions","SetValues":"SetValues","PickTemplate":"PickTemplate","GetDocumentTemplates":"GetDocumentTemplates","EnterObject":"EnterObject"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","label":"Enter Object Id","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"EnterObject":"","ObjectId":"","TemplateType":""},"aggElements":{}},"offSet":0,"name":"EnterObject","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":0,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":13000,"mask":"","label":"ObjectId","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"","debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ObjectId","level":1,"JSONPath":"EnterObject:ObjectId","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc00-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Select","rootIndex":0,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"Microsoft Word .DOCX Template","name":"Microsoft Word .DOCX Template"},{"value":"Microsoft Powerpoint .PPTX Template","name":"Microsoft Powerpoint .PPTX Template"}],"optionSource":{"type":"","source":""},"label":"Template Type","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"TemplateType","level":1,"JSONPath":"EnterObject:TemplateType","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc01-0"}],"bHasAttachment":false}],"bAccordionOpen":true,"bAccordionActive":true,"bStep":true,"isStep":true,"JSONPath":"EnterObject","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"GetDocumentTemplates","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"templateType","element":"TemplateType"}],"controlWidth":12,"bundle":"GuestUser-DocGenSample-ExtractDocumentTemplatesLWC","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetDocumentTemplates","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"GetDocumentTemplates","lwcId":"lwc1"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","label":"Pick a template","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"<p>(Allow only one template to be selected)</p>","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"PickTemplate":""},"aggElements":{"SelectTemplate":""}},"offSet":0,"name":"PickTemplate","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__clmSelectableItems","label":"SelectTemplate","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%DocumentTemplate%","name":"template-list"},{"source":"[\"DocumentGenerationWordLWC\"]","name":"clear-state-on-change"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"SelectTemplate","level":1,"JSONPath":"PickTemplate:SelectTemplate","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc20-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"PickTemplate","lwcId":"lwc2"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"templateType":"=%TemplateType%","selectedTemplate":"=IF(%templateId% == null, %PickTemplate|1:SelectTemplate|1%, %selectedTemplate%)","contextId":"=%EnterObject:ObjectId%"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetValues","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues","lwcId":"lwc3"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","label":"Generation Options","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"GenerationOptions":"","DownloadFileFormat":"","AttachFileFormat":"","DocumentViewer":"","DocGenerationMechanism":"","PdfGenerationSource":"","UseTemplateDRExtract":""},"aggElements":{}},"offSet":0,"name":"GenerationOptions","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Select","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":true,"options":[{"value":"PDF","name":"pdf"}],"optionSource":{"type":"","source":""},"label":"Download File Format","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"pdf","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"DownloadFileFormat","level":1,"JSONPath":"GenerationOptions:DownloadFileFormat","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc40-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Select","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":true,"options":[{"value":"PDF","name":"pdf"}],"optionSource":{"type":"","source":""},"label":"Attach File Format","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"pdf","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"AttachFileFormat","level":1,"JSONPath":"GenerationOptions:AttachFileFormat","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc41-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Select","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"VlocityClientSideViewer","name":"VlocityClientSideViewer"},{"value":"None","name":"None"}],"optionSource":{"type":"","source":""},"label":"Document Viewer","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"VlocityClientSideViewer","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"DocumentViewer","level":1,"JSONPath":"GenerationOptions:DocumentViewer","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc42-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Select","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"VlocityClientSide","name":"VlocityClientSide"}],"optionSource":{"type":"","source":""},"label":"Doc Generation Mechanism","inputWidth":12,"hide":false,"helpText":"","help":true,"disOnTplt":false,"defaultValue":"VlocityClientSide","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"DocGenerationMechanism","level":1,"JSONPath":"GenerationOptions:DocGenerationMechanism","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc43-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Select","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"VlocityClientSide","name":"VlocityClientSide"}],"optionSource":{"type":"","source":""},"label":"Pdf Generation Source","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"VlocityClientSide","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"PdfGenerationSource","level":1,"JSONPath":"GenerationOptions:PdfGenerationSource","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc44-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Select","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"Yes","name":"Yes"},{"value":"No","name":"No"}],"optionSource":{"type":"","source":""},"label":"Use Template DRExtract?","inputWidth":12,"hide":false,"helpText":"Use associated DataRaptor Extract in the template","help":true,"disOnTplt":false,"defaultValue":"Yes","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"UseTemplateDRExtract","level":1,"JSONPath":"GenerationOptions:UseTemplateDRExtract","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc45-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"GenerationOptions","lwcId":"lwc4"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"useTemplateDRExtract":"=%GenerationOptions:UseTemplateDRExtract%","pdfGenerationSource":"=%GenerationOptions:PdfGenerationSource%","downloadFileFormat":"=%GenerationOptions:DownloadFileFormat%","documentViewer":"=%GenerationOptions:DocumentViewer%","docGenerationMechanism":"=%GenerationOptions:DocGenerationMechanism%","attachFileFormat":"=%GenerationOptions:AttachFileFormat%"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetGenerationOptions","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetGenerationOptions","lwcId":"lwc5"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","label":"Generate Document","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Generate Document":""},"aggElements":{"GeneratePdfDocument":""}},"offSet":0,"name":"Generate Document","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":6,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__clmOsDocxGenerateDocument","label":"Generate PDF Document","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%selectedTemplate%","name":"selected-template"},{"source":"false","name":"debug"},{"source":"TestDocumentTitle","name":"document-title"},{"source":"%EnterObject:ObjectId%","name":"context-id"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"GeneratePdfDocument","level":1,"JSONPath":"Generate Document:GeneratePdfDocument","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent2":true,"lwcId":"lwc60-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Generate Document","lwcId":"lwc6"}],"bReusable":false,"bpVersion":2,"bpType":"docGenerationSample","bpSubType":"singleDocxLwcGuestUser","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"DocumentTemplate":null,"selectedTemplate":null,"EnterObject":{"ObjectId":null}}};