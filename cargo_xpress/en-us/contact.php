
<?php
    include './header.php';
?>
<!-- subheader begin -->
<section id="subheader" class="page-contact no-bottom" data-stellar-background-ratio="0.5">
    <div class="overlay">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <h1>Contact Us 
                        <span>Always willing to provide the best service  </span>
                    </h1>
                    <div class="small-border wow flipInY" data-wow-delay=".8s" data-wow-duration=".8s"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- subheader close -->


<!-- content begin -->
<div id="content">
    <div class="container">
        <div class="row no-gutter">
            <div class="col-md-6">
                <div id="map"></div>
            </div>

            <div class="col-md-6">
                <div id="contact-form-wrapper">
                    <div class="contact_form_holder">
                        <form id="contact" class="row" name="form1" method="post" action="">
                            <div id="error_name" class="error">Please check Name</div>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name" />

                            <div id="error_email" class="error">Please check  email</div>
                            <input type="text" class="form-control" name="email" id="email" placeholder="Enter your email" />

                            <div id="error_phone" class="error">Please check phone number</div>
                            <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter your Phone or Cell" />

                            <div id="error_message" class="error">Please check query </div>
                            <textarea cols="10" rows="8" name="message" id="message" class="form-control" placeholder="Enter your query"></textarea>

                            <div id="mail_success" class="success">Thanks, Your query has been sent.</div>
                            <div id="mail_failed" class="error">Error</div>

                            <p id="btnsubmit">
                                <input type="submit" id="send" value="Enviar" class="btn btn-custom" />
                            </p>

                        </form>
                    </div>
                </div>
            </div>


        </div>

    </div>
    <div class="divider-line"></div>

    <?php
    include 'partners.php';
    ?>
</div>
<!-- content close -->
<?php
include './footer.php';
?>
<script src="../js/contact.js"></script>
<script src="../js/map.js"></script>
