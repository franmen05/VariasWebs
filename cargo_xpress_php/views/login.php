
<?php
include './header.php';
?>


<!-- content begin -->
<div id="content">
    <div class="container">
        <div class="row no-gutter">

            <div class="col-md-12">
                <div id="contact-form-wrapper">
                    <div class="contact_form_holder">
                        <form id="login" class="row" name="form1" method="post" action="authenticator.php">


                            <div id="error_username" class="error">Por favor verificar Nombre de Usuario</div>
                            <input type="text" class="form-control" name="username" id="username" placeholder="Introduzca nombre de usuario" />


                            <div id="error_password" class="error">Por favor verificar contrania </div>
                            <input type="password" class="form-control" name="pass" id="pass" placeholder="contrasenia" />


                            <div id="mail_success" class="success">Thank you. Your message has been sent.</div>
                            <div id="mail_failed" class="error">Error, email not sent</div>

                            <p id="btnsubmit">
                                <input type="submit" id="initSession" value="Iniciar Session" class="btn btn-custom" />
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<!-- content close -->
<?php


include './footer.php';

