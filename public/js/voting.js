$('.changeHologram').click(function(){
  $('.changeHologram').removeClass("active");
    $(this).addClass("active");
});

$('#man').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'man');
    $('.vote').removeClass("visible");
    $('#vote-man').addClass("visible");

});

$('#woman').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'woman');
    $('.vote').removeClass("visible");
    $('#vote-woman').addClass("visible");
});

$('#moth').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'moth');
    $('.vote').removeClass("visible");
    $('#vote-moth').addClass("visible");
});

$('#dna').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'dna');
    $('.vote').removeClass("visible");
    $('#vote-dna').addClass("visible");
});

$('#leopard').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'leopard');
    $('.vote').removeClass("visible");
    $('#vote-leopard').addClass("visible");
});

$('#cat').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'cat');
    $('.vote').removeClass("visible");
    $('#vote-cat').addClass("visible");
});

$('#fish').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'fish');
    $('.vote').removeClass("visible");
    $('#vote-fish').addClass("visible");
});
