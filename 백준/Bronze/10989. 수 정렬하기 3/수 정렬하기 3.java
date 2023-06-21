
import java.util.*;
import java.io.*;
public class Main{

	public static void main(String[] args)throws IOException {
		// TODO Auto-generated method stub
		BufferedReader bf=new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb=new StringBuilder();
		
		int n=Integer.parseInt(bf.readLine());
		int[] a=new int[n];
		
		for(int i=0;i<n;i++) {
			a[i]=Integer.parseInt(bf.readLine());
		}
		Arrays.sort(a);
		
		for(int i=0;i<n;i++) {
			sb.append(a[i]).append('\n');
		}
		System.out.print(sb);
	}

}
