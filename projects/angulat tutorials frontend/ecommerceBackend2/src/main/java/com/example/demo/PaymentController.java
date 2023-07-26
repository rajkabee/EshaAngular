package com.example.demo;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class PaymentController {
	@Autowired
	RestTemplate restTemplate;
	
	@GetMapping("/payment")
	public ResponseEntity<String> payment() {
		String url= "https://a.khalti.com/api/v2//epayment/initiate/";
		HttpHeaders headers = new HttpHeaders();
		// set `content-type` header
		headers.setContentType(MediaType.APPLICATION_JSON);
		// set `accept` header
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
		Map<String, Object> map = new HashMap<>();
		map.put("Authorization", "key test_secret_key_fe57feb417084638be4b2a5e5cea6f37");
		map.put("purchase_order_id", "testPurchaseId1234");
		map.put("amount", "1300");
		map.put("return_url", "http://localhost:8080");
		HttpEntity<Map<String, Object>> entity = new HttpEntity<Map<String,Object>>(map, headers);
		ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
		//restTemplate.post
		System.out.println(response.getBody());
		return response;
	}
	
}
