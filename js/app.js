// copy to index
<script src="https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js"></script>
<script src="js/app.js"></script>


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQKZtUOrFYrGySNw-GvPxfp0Ml2E3HQWU",
  authDomain: "idul-fitri-uby.firebaseapp.com",
  projectId: "idul-fitri-uby",
  storageBucket: "idul-fitri-uby.appspot.com",
  messagingSenderId: "339825292084",
  appId: "1:339825292084:web:0348358312e9f3e8f46b61"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('rsvp-name').value;
    var message = document.getElementById('rsvp-message').value;

    // Simpan data ke Firebase Realtime Database
    var database = firebase.database();
    var newWishRef = database.ref('wishes').push();
    newWishRef.set({
      name: name,
      message: message
    })
    .then(function() {
      document.getElementById('contactFormResponse').classList.remove('hidden');
      document.getElementById('contactFormResponse').innerHTML = "Wish sent successfully!";
      document.getElementById('rsvp-name').value = "";
      document.getElementById('rsvp-message').value = "";
    })
    .catch(function(error) {
      document.getElementById('contactFormResponse').classList.remove('hidden');
      document.getElementById('contactFormResponse').innerHTML = "Error sending wish: " + error.message;
    });
  });



    var database = firebase.database();
    var wishesRef = database.ref('wishes');
    wishesRef.on('value', function(snapshot) {
        var wishes = snapshot.val();
        var testimonyArea = document.getElementById('testimonyArea'); // Ganti dengan ID yang sesuai
        testimonyArea.innerHTML = ''; // Kosongkan konten sebelum menambahkan data baru
        for (var key in wishes) {
            if (wishes.hasOwnProperty(key)) {
                var wish = wishes[key];
                // Buat elemen div untuk setiap keinginan
                var testimonyItem = document.createElement('div');
                testimonyItem.classList.add('uby-testimony-area-list', 'ww-animation');
                // Tambahkan konten HTML dengan menggunakan backticks (`)
                testimonyItem.innerHTML = `
                    <div class="uby-testimony-area-list-content">
                        <p>${wish.message}</p>
                    </div>
                    <div class="uby-testimony-area-list-sender">
                        <p>${wish.name}</p>
                    </div>
                `;
                // Tambahkan elemen testimonyItem ke dalam testimonyArea
                testimonyArea.appendChild(testimonyItem);
            }
        }
    });
