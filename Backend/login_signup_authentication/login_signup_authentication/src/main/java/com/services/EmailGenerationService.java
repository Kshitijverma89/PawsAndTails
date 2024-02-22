package com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.internet.MimeMessage;


@Service
public class EmailGenerationService {
	
	@Value("${spring.mail.username}")
	private String fromEmail;
	
	@Autowired
	private JavaMailSender javaMailSender;

	
	public String sendAutoGeneratedMail(MultipartFile[] file, String to, String[] cc, String subject, String body) {
		// TODO Auto-generated method stub
		
		try {
			
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			
			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			
			mimeMessageHelper.setFrom(fromEmail);
			mimeMessageHelper.setTo(to);
			mimeMessageHelper.setCc(cc);
			mimeMessageHelper.setSubject(subject);
			mimeMessageHelper.setText(body);
			
			for(int i = 0; i< file.length; i++) {
				mimeMessageHelper.addAttachment(
												file[i].getOriginalFilename(), 
												new ByteArrayResource(file[i].getBytes())
												);
			}
			
			javaMailSender.send(mimeMessage);
			
			return "Mail Sent Successfully";
			
		}catch(Exception ex) {
			throw new RuntimeException(ex);
		}
	}
	public String sendAutoGeneratedMail(String to, String subject, String body) {
		// TODO Auto-generated method stub
		
		try {
			
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			
			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			
			mimeMessageHelper.setFrom(fromEmail);
			mimeMessageHelper.setTo(to);
			mimeMessageHelper.setSubject(subject);
			mimeMessageHelper.setText(body);
			
			javaMailSender.send(mimeMessage);
			
			return "Mail Sent Successfully";
			
		}catch(Exception ex) {
			throw new RuntimeException(ex);
		}
	}

}