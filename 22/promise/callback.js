function loadData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          callback(null, xhr.responseText);
      } else {
          callback(new Error(xhr.statusText), null);
      }
  };
  xhr.onerror = function() {
      callback(new Error("Network error"), null);
  };
  xhr.send();
}

loadData('https://example.com/data', function(error, data) {
  if (error) {
      console.error("Failed to load data:", error);
  } else {
      console.log("Data loaded successfully:", data);
  }
})