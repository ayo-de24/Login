<script>
  document.getElementById('bookingForm').addEventListener('submit', function(e) 
    e.preventDefault();
    alert('Thank you for booking! We will contact you soon.');
    this.reset();
  );
</script>