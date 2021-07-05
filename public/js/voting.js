$('.changeHologram').click(function(){
  $('.changeHologram').removeClass("active");
    $(this).addClass("active");
});



$('#man').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'man');
    $('.vote').removeClass("visible");
    $('#vote-man').addClass("visible");

});

$('#vote-man').click(function(){
  const manoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"vote": "man"})
  }
  fetch("/api",manoptions);
});

$('#woman').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'woman');
    $('.vote').removeClass("visible");
    $('#vote-woman').addClass("visible");
});

$('#vote-woman').click(function(){
  const womanoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"vote": "woman"})
  }
  fetch("/api",womanoptions);
});

$('#moth').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'moth');
    $('.vote').removeClass("visible");
    $('#vote-moth').addClass("visible");
});

$('#vote-moth').click(function(){
  const mothoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"vote": "moth"})
  }
  fetch("/api",mothoptions);
});

$('#dna').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'dna');
    $('.vote').removeClass("visible");
    $('#vote-dna').addClass("visible");
});

$('#vote-dna').click(function(){
  const dnaoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"vote": "dna"})
  }
  fetch("/api",dnaoptions);
});

$('#leopard').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'leopard');
    $('.vote').removeClass("visible");
    $('#vote-leopard').addClass("visible");
});

$('#vote-leopard').click(function(){
  const leopardoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"vote": "leopard"})
  }
  fetch("/api",leopardoptions);
});

$('#cat').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'cat');
    $('.vote').removeClass("visible");
    $('#vote-cat').addClass("visible");
});

$('#vote-cat').click(function(){
  const catoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"vote": "cat"})
  }
  fetch("/api", catoptions);
});

$('#fish').click(function(){
    unityInstance.SendMessage('woman2', 'ChangeHologram', 'fish');
    $('.vote').removeClass("visible");
    $('#vote-fish').addClass("visible");
});

$('#vote-fish').click(function(){
  const fishoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"vote": "fish"})
  }
  fetch("/api",fishoptions);
});
