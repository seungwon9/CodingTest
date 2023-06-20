import java.util.*;
import java.io.*;
public class Main {

	public static void main(String[] args)throws IOException {
		// TODO Auto-generated method stub
		BufferedReader bf=new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb=new StringBuilder();
		
		int n=Integer.parseInt(bf.readLine());
		ArrayList<Integer> list=new ArrayList<>();
		
		for(int i=0;i<n;i++) {
			list.add(Integer.parseInt(bf.readLine()));
		}
		Collections.sort(list);
		
		for(int value : list) {
			sb.append(value).append('\n');
		}
		System.out.print(sb);
	}

}
