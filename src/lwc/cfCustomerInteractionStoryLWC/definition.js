let definition = 
                {"GlobalKey__c":"Customer Interaction Story LWC/Vlocity/2/1580726130174","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"vlocity_cmt__CustomerInteraction__c"},"icon":"custom15","sessionVars":[{"name":"iconName","val":"custom:custom15"}],"sprite":"custom","states":[{"blankStateCheck":false,"collapse":false,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Type","name":"['highlight']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == true","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb5f000000qSHcCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyOngoingState","Id":"0Rb5f000000qSHdCAY","MasterLabel":"storyOngoingState","name":"storyOngoingState"},"name":"Customer Interaction Onging","sObjectType":"vlocity_cmt__CustomerInteraction__c","templateUrl":"story-card"},{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Type","name":"['highlight']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb5f000000qSHcCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0Rb5f000000qSHeCAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Customer Interaction","sObjectType":"vlocity_cmt__CustomerInteraction__c","templateUrl":"story-card"}],"title":"Customer Interactions"}; 
            export default definition