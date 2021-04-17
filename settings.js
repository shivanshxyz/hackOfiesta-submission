function save_options() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    chrome.storage.sync.set({
        myName: name,
        myAddress: address
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Settings saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        myName: "",
        myAddress: ""
    }, function(items) {
        document.getElementById('name').value = items.myName;
        document.getElementById('address').value = items.myAddress;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);