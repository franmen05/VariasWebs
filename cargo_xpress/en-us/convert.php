
<?php 
    include './header.php';
?>
        <!-- subheader begin -->
        <section id="subheader" class="page-contact no-bottom" data-stellar-background-ratio="0.5">
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <h1>Unit converter 
                                <span>Conversion of metric units </span>
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

                    <div class="col-md-12">
                        <div id="contact-form-wrapper">
                            <div class="contact_form_holder">
                                <form id="contact" class="row" name="form1" method="post" action="#">
                                    

                                    <div id="error_email" class="error">Please check email</div>
                                    <!--<input type="text" class="form-control" name="email" id="email" placeholder="Introduzca su email" />-->
                                    <select id="unit1"   class="form-control" >
                                        
                                         <option value="l">Select Unit</option>
                                         <option value="l">Length</option>
                                         <option value="s">Area</option>
                                         <option value="v">Volumen </option>
                                         <option value="p">Weight</option>      
                                    </select>
                                    
                                    <div id="unit2_div" class="error">must select unit</div>
                                    <select id="unit2"  class="form-control"  >
                                         <option value="l">Select Unit</option>
                                        
                                    </select>
                                    
                                    
                                    <div id="error_phone" class="error">Por favor verificar Nnumero telefonico</div>
                                    <input type="number" class="form-control" name="value1" id="value1" placeholder="Introduzca cantidad" />

                                
                                    <div id="error_phone" class="error">Por favor verificar Nnumero telefonico</div>
                                    <input type="number" class="form-control" name="result" id="result" placeholder="Resultado"  readonly="true"/>
                                

                                    <div id="mail_success" class="success">Thank you. Your message has been sent.</div>
                                    <div id="mail_failed" class="error">Error, email not sent</div>

                                    <p id="btnsubmit">
                                            <input type="submit" id="calculate" value="Calcular" class="btn btn-custom" />
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
    include './contact_us.php';
    include './footer.php';
         ?>
<script src="../js/convert.js"></script>
