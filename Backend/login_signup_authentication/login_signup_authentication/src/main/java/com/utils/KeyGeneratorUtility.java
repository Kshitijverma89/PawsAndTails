package com.utils;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

public class KeyGeneratorUtility {
	
	// we need RSA(name of encryption algo) key pair to generate JWT and encrypt then
	public static KeyPair generateRsaKey() {
		
		KeyPair keyPair;
		
		try {
			
			KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");	//Returns an instance of KeyPairGenerator which is used to generate key pairs for specified algorithms
			keyPairGenerator.initialize(2048);	//Initializes key pair generator for specified keysize 
			keyPair = keyPairGenerator.generateKeyPair();
		}catch(Exception e) {
			System.out.println("inside keyGenerator");
			throw new IllegalStateException();
		}
		
		return keyPair;		//will be used to encode and decode our JWT's
		
		//we need a model to store the keypair
		//we can't just choose keypair, we need RSA Key Properties
		
	}

}
