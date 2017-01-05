package org.xc.webrest.util;

public class RandomUtil {
	public static String id() {
		String base = "abcdefghijklmnopqrstuv";
		java.util.Random random = new java.util.Random();
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < 16; i++) {
			int number = random.nextInt(base.length());
			sb.append(base.charAt(number));
		}
		String key = sb.toString();
		return key;
	}
}
