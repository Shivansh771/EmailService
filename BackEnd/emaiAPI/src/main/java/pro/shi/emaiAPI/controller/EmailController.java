package pro.shi.emaiAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.shi.emaiAPI.model.EmailRequest;
import pro.shi.emaiAPI.model.EmailResponse;
import pro.shi.emaiAPI.service.EmailService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @GetMapping("/welcome")
    public String welcome(){

        return "welcome";
    }
    @RequestMapping(value = "/sendemail", method = RequestMethod.POST)
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request){
        System.out.println(request);
        //this.emailService.sendEmail()
        boolean result=this.emailService.sendEmail(request.getSubject(),request.getMessage(),request.getTo());
        if(result){
            return ResponseEntity.ok()
                    .header("Content-Type", "application/json")
                    .body(new EmailResponse("Sent"));
}
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).header("Content-Type","application/json").body(new EmailResponse("Something went wrong"));
        }

    }
}
