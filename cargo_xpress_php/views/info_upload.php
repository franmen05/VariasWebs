
<?php
include './header.php';
?>

<!-- subheader close -->


<!-- content begin -->
<div id="content">
    <div class="container">

        <div>
            <form enctype="multipart/form-data" action="uploader.php" method="POST">
                <div class="col-md-3">

                    <!-- El nombre del elemento de entrada determina el nombre en el array $_FILES -->
                    <h3>Enviar este fichero: </h3>
                    
                    <input class="btn btn-default
                                                " name="fichero_usuario" type="file" />
                    <input  type="submit" class="btn btn-slider" value="Enviar fichero" />

                </div>
            </form>
        </div>

    </div>
</div>
<!-- content close -->
<?php
include './contact_us.php';
include './footer.php';
?>
<script src="js/contact.js"></script>
<script src="js/map.js"></script>
