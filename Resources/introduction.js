//
// general introduction of EQ 31 Formulas.
//
 
(function()
{	
	// window container
	var welcomeWindow = Titanium.UI.createWindow({
		fullcreen:true,
		backgroundImage:'images/' + _('img_fix') + '_splash.png'
	});
	
	var actInd = Titanium.UI.createActivityIndicator({
		bottom:100, 
		height:50,
		width:10,
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});
	welcomeWindow.add(actInd);
	
	var start = Titanium.UI.createLabel({
		text: _('loading_message'),
		font:{fontSize:20,fontWeight:'bold', fontFamily:'Helvetica'},
		color:'#fff',
		textAlign:'center',
		shadowColor:'#000',
		shadowOffset:{x:0,y:1},
		height:50,
		width:320,
		bottom:100
	});

	welcomeWindow.add(start);
	start.hide();
	
	welcomeWindow.open();
	
	welcomeWindow.addEventListener('open', function(){
		actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
		actInd.font = {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'};
		actInd.color = 'white';
		actInd.message = _('loading');
		actInd.width = 210;
		actInd.show();
		setTimeout(function()
		{
			actInd.hide();
			start.show();
		},3000);
	});
	
	welcomeWindow.addEventListener('click', function()
	{
		// Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked me!'}).show();
		welcomeWindow.close({
			transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP
		});
	});
	
})();

